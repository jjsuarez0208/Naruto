import { useState, useEffect } from 'react';
import { fetchVillains } from '../services/api.js';

function Villains() {
  const [villains, setVillains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); 

  useEffect(() => {
    const loadVillains = async () => {
      try {
        const data = await fetchVillains();
        setVillains(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los villanos');
        setLoading(false);
      }
    };

    loadVillains();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredVillains = filter === 'all' 
    ? villains 
    : villains.filter(villain => 
        filter === 'akatsuki' 
          ? villain.affiliation?.toLowerCase().includes('akatsuki')
          : !villain.affiliation?.toLowerCase().includes('akatsuki')
      );

  if (loading) return <div className="loading">Cargando villanos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="villains-container">
      <h1>Villanos de Naruto</h1>
      
      <div className="filter-container">
        <label htmlFor="villain-filter">Filtrar por:</label>
        <select 
          id="villain-filter" 
          value={filter} 
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">Todos</option>
          <option value="akatsuki">Akatsuki</option>
          <option value="other">Otros villanos</option>
        </select>
      </div>
      
      <div className="grid-container">
        {filteredVillains.map(villain => (
          <div className="card villain-card" key={villain.id}>
            <img 
              src={villain.image || 'https://via.placeholder.com/150'} 
              alt={villain.name} 
              className="card-image" 
            />
            <h3 className="card-title">{villain.name}</h3>
            <p className="card-description">
              <strong>Afiliación:</strong> {villain.affiliation || 'Desconocido'}<br />
              <strong>Habilidades:</strong> {villain.abilities?.join(', ') || 'Desconocidas'}
            </p>
          </div>
        ))}
      </div>

      {filteredVillains.length === 0 && (
        <p className="no-results">No se encontraron villanos con ese filtro.</p>
      )}
    </div>
  );
}

export default Villains;