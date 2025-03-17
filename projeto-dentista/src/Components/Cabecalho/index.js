import { NavLink } from 'react-router-dom'
import './Cabecalho.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Cabecalho() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [ showMenu, setShowMenu ] = useState(false)
  const toggleMenu = () => {setShowMenu(!showMenu)}

  return (
    <header className={`cabecalho`}>
      <section className={`cabecalho-menu`}>
      <img src={logo} alt="Logo da Clínica" className="logo-image" />
      <nav className={`menuSandwich ${showMenu ? 'show' : ''}`}onClick={toggleMenu}>
        <ul>
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about-us" activeClassName="active">Quem somos</NavLink></li>
        <li><NavLink to="/specialties" activeClassName="active">Especialidades</NavLink></li>
        <li><NavLink to="/contacts" activeClassName="active">Contatos</NavLink></li>
        </ul>
      </nav>
      </section>
      <div className={`menuButton ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
      <span className="linhac"></span>
      <span className="linhac"></span>
      <span className="linhac"></span>
      </div>
      {!isHomePage && <hr className="line-separation" />}
    </header>
  )
}

export default Cabecalho