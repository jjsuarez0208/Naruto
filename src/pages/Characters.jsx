import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/api.js';

function Characters({ addToFavorites, favorites }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los personajes');
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isInFavorites = (characterId) => {
    return favorites.some(fav => fav.id === characterId);
  };

  if (loading) return <div className="loading">Cargando personajes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="characters-container">
      <h1>Personajes de Naruto</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar personajes..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      
      <div className="grid-container">
        {filteredCharacters.map(character => (
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
              className={`btn ${isInFavorites(character.id) ? 'btn-favorite active' : 'btn-favorite'}`}
              onClick={() => addToFavorites(character)}
              disabled={isInFavorites(character.id)}
            >
              {isInFavorites(character.id) ? 'En favoritos' : 'Añadir a favoritos'}
            </button>
          </div>
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <p className="no-results">No se encontraron personajes con ese nombre.</p>
      )}
    </div>
  );
}

export default Characters;