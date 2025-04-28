import { Link } from 'react-router-dom';

function Favorites({ favorites, removeFromFavorites }) {
  return (
    <div className="favorites-container">
      <h1>Tus Personajes Favoritos</h1>
      
      {favorites.length > 0 ? (
        <div className="grid-container">
          {favorites.map(character => (
            <div className="card" key={character.id}>
              <img 
                src={character.image || 'https://via.placeholder.com/150'} 
                alt={character.name} 
                className="card-image" 
              />
              <h3 className="card-title">{character.name}</h3>
              <p className="card-description">
                <strong>Clan:</strong> {character.clan || 'Desconocido'}<br />
                <strong>Aldea:</strong> {character.village || 'Desconocida'}
              </p>
              <button 
                className="btn btn-secondary"
                onClick={() => removeFromFavorites(character.id)}
              >
                Quitar de favoritos
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <p>No tienes personajes favoritos aún.</p>
          <Link to="/characters" className="btn">Explorar personajes</Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;