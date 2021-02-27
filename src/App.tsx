import React, { useState, useEffect } from 'react';
import './App.css';
import ContentView from './components/ContentView';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import { Category, Article } from './interfaces/data-structures';

function App() {
  const api = process.env.REACT_APP_API;

  const [categories, setCategories] = useState([] as Category[]);
  const [articles, setArticles] = useState([] as Article[])
  const [latestArticle, setLatestArticle] = useState({} as Article);
  useEffect(() => {

    const getData = async () => {
      const categoryData = await getCategories();
      setCategories(categoryData);
      const articlesData = await getArticles();
      setArticles(articlesData)
      const articleData = await getLatestArticle();
      
      setLatestArticle(articleData)
    }
    getData();
    
    
  }, [])
  const getCategories = async () : Promise<Category[]> => {
    const categoryResponse = await fetch(`${api}/categories/get`)
    const categoryData = await categoryResponse.json()
    return categoryData
  }
  const getArticles = async () : Promise<Article[]>=> {
    const articlesResponse = await fetch(`${api}/articles/get`)
    const articlesData = await articlesResponse.json()
    return articlesData
  }

  const getLatestArticle = async ():Promise<Article> => {
    const latestArticleRes = await fetch(`${api}/articles/latest/get`)
    const latestArticleData = await latestArticleRes.json();
    
    return latestArticleData;
  }

  return (    
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Sidebar categories={categories} articles={articles} />
          <ContentView article={latestArticle}/>
        </div>
      </div>
    </div>
  );
}

export default App;
