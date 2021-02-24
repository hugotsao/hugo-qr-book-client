import { Article } from "../interfaces/data-structures"

interface IProps {
  article: Article
}
function ContentView({ article }: IProps) {
  return (
    <main className="container">
      <div className="starter-template text-center py-5 px-3">
        <h1>{article.title}</h1>
        <p className="lead">{article.content}</p>
      </div>
    </main>
  )
}

export default ContentView
