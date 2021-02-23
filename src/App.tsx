import React, { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import { Category } from './interfaces/data-structures';

function App() {
  const api = "http://localhost:8080/api";
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([])
  const [content, setContent] = useState({});
  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(`${api}/categories/get`)
      const data = await res.json()
      setCategories(data)
    }
    getCategories();
  }, [])
 
  return (
    
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Sidebar categories={categories}/>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
