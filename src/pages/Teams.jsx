import { useState, useEffect } from 'react';
import { fetchTeams } from '../services/api.js';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const data = await fetchTeams();
        setTeams(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los equipos');
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  const closeModal = () => {
    setSelectedTeam(null);
  };

  if (loading) return <div className="loading">Cargando equipos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="teams-container">
      <h1>Equipos de Naruto</h1>
      
      <div className="grid-container">
        {teams.map(team => (
          <div 
            className="card team-card" 
            key={team.id}
            onClick={() => handleTeamClick(team)}
          >
            <img 
              src={team.image || 'https://via.placeholder.com/150'} 
              alt={team.name} 
              className="card-image" 
            />
            <h3 className="card-title">{team.name}</h3>
            <p className="card-description">
              <strong>Miembros:</strong> {team.members?.length || 0}
            </p>
          </div>
        ))}
      </div>

      {selectedTeam && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedTeam.name}</h2>
            <img 
              src={selectedTeam.image || 'https://via.placeholder.com/150'} 
              alt={selectedTeam.name} 
              className="modal-image" 
            />
            <p>{selectedTeam.description}</p>
            
            <h3>Miembros</h3>
            <ul className="members-list">
              {selectedTeam.members?.map(member => (
                <li key={member.id}>{member.name}</li>
              )) || <li>No hay miembros registrados</li>}
            </ul>
          </div>
        </div>
      )}

      {teams.length === 0 && (
        <p className="no-results">No se encontraron equipos.</p>
      )}
    </div>
  );
}

export default Teams;