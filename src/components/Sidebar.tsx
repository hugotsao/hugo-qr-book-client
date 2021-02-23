import { Category } from "../interfaces/data-structures"

interface IProps {
  categories: Category[]
}

const Sidebar = ({ categories }: IProps) => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
        { categories.map((category) => 
          <li className="nav-item" key={category.categoryId}>
            <a className="nav-link active" href="#">
              {category.categoryName} 
              </a>
          </li>
        )}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
