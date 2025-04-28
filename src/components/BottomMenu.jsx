import { Link, useLocation } from 'react-router-dom';

function BottomMenu() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="bottom-menu">
      <Link to="/" className={`menu-item ${isActive('/')}`}>
        <i className="fas fa-home"></i>
        <span>Inicio</span>
      </Link>
      <Link to="/characters" className={`menu-item ${isActive('/characters')}`}>
        <i className="fas fa-users"></i>
        <span>Personajes</span>
      </Link>
      <Link to="/teams" className={`menu-item ${isActive('/teams')}`}>
        <i className="fas fa-users-cog"></i>
        <span>Equipos</span>
      </Link>
      <Link to="/villains" className={`menu-item ${isActive('/villains')}`}>
        <i className="fas fa-skull"></i>
        <span>Villanos</span>
      </Link>
      <Link to="/favorites" className={`menu-item ${isActive('/favorites')}`}>
        <i className="fas fa-star"></i>
        <span>Favoritos</span>
      </Link>
    </div>
  );a
}

export default BottomMenu;