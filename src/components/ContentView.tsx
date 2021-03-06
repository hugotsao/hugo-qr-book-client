import { useState, useEffect } from "react"
import { Article } from "../interfaces/data-structures"

interface IProps {
  article: Article
  
}

function ContentView({article}:IProps) {
  const [content, setContent] = useState("")

  useEffect(() => {
    
    const getContent = async () => {
      const res = await fetch(article.contentUri)
      const data = await res.text()
      setContent(data)
    }
    if (article.contentUri) {
      getContent();
    }
    
  }, [article])

  return (
    <main className="container">
      <div className="starter-template text-center py-5 px-3">
        <h1>{article.title}</h1>
        <p className="lead">{content}</p>
      </div>
    </main>
  )
}

export default ContentView
