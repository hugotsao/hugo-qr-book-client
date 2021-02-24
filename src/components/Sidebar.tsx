import { Category } from "../interfaces/data-structures"

interface IProps {
  categories: Category[]
}
const onClickCategory = (categoryId:string) => {
  console.log(categoryId)
}

const Sidebar = ({ categories }: IProps) => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
        { categories.map((category) => 
          <li className="nav-item" key={category.categoryId}>
            <button className="btn" onClick={() => onClickCategory(category.categoryId)}>
              {category.categoryName}
            </button>
            <div>
            <a className="nav-link active" href="#">
              title1
            </a>
            <a className="nav-link active" href="#">
              title2
            </a>
            </div>
          </li>
        )}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
