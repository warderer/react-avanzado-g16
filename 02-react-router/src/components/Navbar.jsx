import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/portafolio'>Portafolio</Link>
        </li>
        <li>
          <Link to='/contacto'>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
