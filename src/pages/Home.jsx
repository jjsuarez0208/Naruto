import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../services/api.js';


function Home() {
  const [featuredCharacters, setFeaturedCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeaturedCharacters = async () => {
      try {
        // Use our api service instead of direct fetch
        const data = await fetchCharacters();
        
        // Check if we got data back
        if (!data || !Array.isArray(data) || data.length === 0) {
          throw new Error('No se pudieron cargar los personajes');
        }
        
        // Seleccionar aleatoriamente 4 personajes destacados (o menos si no hay suficientes)
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setFeaturedCharacters(shuffled.slice(0, Math.min(4, data.length)));
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los personajes destacados');
        setLoading(false);
        console.error('Error cargando personajes:', err);
      }
    };

    loadFeaturedCharacters();
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Bienvenido al Universo de Naruto</h1>
        <p>Explora personajes, equipos y villanos del mundo ninja</p>
      </section>

      <section className="featured">
        <h2>Personajes Destacados</h2>
        <div className="grid-container">
          {featuredCharacters.map(character => (
            <div className="card" key={character.id || Math.random()}>
              <img 
                src={character.image || character.images?.[0] || `https://via.placeholder.com/150?text=${encodeURIComponent(character.name || 'Ninja')}`} 
                alt={character.name} 
                className="card-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/150?text=${encodeURIComponent(character.name || 'Ninja')}`;
                }} 
              />
              <h3 className="card-title">{character.name || 'Personaje de Naruto'}</h3>
              <p className="card-description">
                {(character.description || character.about || `${character.name || 'Este personaje'} es un ninja del universo Naruto.`)
                  .substring(0, 100)}
                {(character.description || character.about || '').length > 100 ? '...' : ''}
              </p>
            </div>
          ))}
        </div>
        <div className="center-button">
          <Link to="/characters" className="btn">Ver todos los personajes</Link>
        </div>
      </section>

      <section className="categories">
        <h2>Explora por Categorías</h2>
        <div className="categories-grid">
          <Link to="/characters" className="category-card">
            <h3>Personajes</h3>
            <p>Conoce a todos los ninjas del universo Naruto</p>
          </Link>
          <Link to="/teams" className="category-card">
            <h3>Equipos</h3>
            <p>Descubre los diferentes equipos y sus miembros</p>
          </Link>
          <Link to="/villains" className="category-card">
            <h3>Villanos</h3>
            <p>Aprende sobre los antagonistas de la serie</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;