import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/api';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getCharacterById(id);
        console.log("Datos del personaje:", data); // 🔍 Verifica que los datos incluyen la imagen
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
        setError('Error al obtener los detalles del personaje');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <div className="loading">Cargando personaje...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!character) return <p className="no-results">Personaje no encontrado.</p>;

  return (
    <div className="character-detail-container">
      <h1>{character.name || 'Desconocido'}</h1>
      <img 
        src={character.image || `https://via.placeholder.com/150?text=${encodeURIComponent(character.name || 'Personaje')}`} 
        alt={character.name || 'Personaje'}
        className="character-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://via.placeholder.com/150?text=${encodeURIComponent(character.name || 'Personaje')}`;
        }}
      />
      <p className="character-description">
        {character.description || 'No hay descripción disponible.'}
      </p>
    </div>
  );
};

export default CharacterDetail;
