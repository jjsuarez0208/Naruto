import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={reactLogo} alt="Logo" className="navbar-logo" />
        <Link to="/" className="navbar-title">Naruto Universe</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/characters" className="nav-link">Personajes</Link>
        <Link to="/teams" className="nav-link">Equipos</Link>
        <Link to="/villains" className="nav-link">Villanos</Link>
        <Link to="/favorites" className="nav-link">Favoritos</Link>
        <Link to="/about" className="nav-link">Acerca de</Link>
      </div>
    </nav>
  );
}

export default Navbar;