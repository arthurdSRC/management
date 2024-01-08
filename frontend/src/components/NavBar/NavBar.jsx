import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="container flex">
        <h2>Party Time!</h2>

        <nav className="links">
          <NavLink to="/">Minhas Festas</NavLink>
          <NavLink to="/party/new">Criar Festas</NavLink>
        </nav>

      </div>

    </header>
  )
}

export default NavBar