import { Category, Article } from "../interfaces/data-structures"

interface IProps {
  categories: Category[],
  articles: Article[],
  changeArticle(articleId: string):Promise<void>
}
const onClickCategory = (categoryId: string) => {
  //console.log(categoryId)
}

const Sidebar = ({ categories, articles, changeArticle }: IProps) => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          {categories.map(category =>

            <li className="nav-item" key={category.categoryId}>
              <div>
                <h5>{category.categoryName}</h5>
              </div>
              <div>
                {articles.filter(art => art.categoryId === category.categoryId).map(article =>
                  <a key={article.articleId} className="nav-link active" onClick={() => changeArticle(article.articleId)}>
                    {article.title}
                  </a>
                )}
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
