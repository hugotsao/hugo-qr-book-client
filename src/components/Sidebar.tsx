import { Category, Article } from "../interfaces/data-structures"

interface IProps {
  categories: Category[],
  articles: Article[]
}
const onClickCategory = (categoryId: string) => {
  //console.log(categoryId)
}

const Sidebar = ({ categories, articles }: IProps) => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          {categories.map(category =>

            <li className="nav-item" key={category.categoryId}>
              <button className="btn" onClick={() => onClickCategory(category.categoryId)}>
                {category.categoryName}
              </button>
              <div>
                {articles.filter(art => art.categoryId === category.categoryId).map(article =>
                  <a className="nav-link active" href="#">
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
