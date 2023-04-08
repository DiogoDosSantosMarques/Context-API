import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>

<NavLink to="/">Home</NavLink>

<NavLink to="/missao">Misão Visão Valores</NavLink>

<NavLink to="/vagas">Vagas</NavLink>



    </div>
  )
}

export default NavBar