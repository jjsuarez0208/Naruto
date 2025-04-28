const API_BASE_URL = 'https://dattebayo-api.onrender.com';

// Mock data to use as fallback if the API is unavailable
const MOCK_CHARACTERS = [
  { id: 1, name: 'Naruto Uzumaki', village: 'Konoha', image: 'https://via.placeholder.com/150?text=Naruto' },
  { id: 2, name: 'Sasuke Uchiha', village: 'Konoha', image: 'https://via.placeholder.com/150?text=Sasuke' },
  { id: 3, name: 'Sakura Haruno', village: 'Konoha', image: 'https://via.placeholder.com/150?text=Sakura' },
  { id: 4, name: 'Kakashi Hatake', village: 'Konoha', image: 'https://via.placeholder.com/150?text=Kakashi' },
  { id: 5, name: 'Itachi Uchiha', village: 'Akatsuki', image: 'https://via.placeholder.com/150?text=Itachi' }
];

const MOCK_TEAMS = [
  { id: 1, name: 'Team 7', members: [1, 2, 3, 4] },
  { id: 2, name: 'Akatsuki', members: [5] }
];

const MOCK_VILLAINS = [
  { id: 1, name: 'Orochimaru', village: 'Sound', image: 'https://via.placeholder.com/150?text=Orochimaru' },
  { id: 2, name: 'Pain', village: 'Akatsuki', image: 'https://via.placeholder.com/150?text=Pain' }
];

// Fetch Characters
export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/characters`);
    if (!response.ok) {
      console.warn('API unavailable, using mock characters');
      return MOCK_CHARACTERS;
    }
    const data = await response.json();
    return data.characters || MOCK_CHARACTERS;
  } catch (error) {
    console.error('Error en fetchCharacters:', error);
    console.warn('Using mock characters instead');
    return MOCK_CHARACTERS;
  }
};

// Fetch Character By ID
export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/character/${id}`);
    if (!response.ok) {
      console.warn('API unavailable, using mock character');
      return MOCK_CHARACTERS.find(char => char.id === Number(id)) || null;
    }
    const data = await response.json();
    return data.character || (MOCK_CHARACTERS.find(char => char.id === Number(id)) || null);
  } catch (error) {
    console.error('Error en fetchCharacterById:', error);
    console.warn('Using mock character instead');
    return MOCK_CHARACTERS.find(char => char.id === Number(id)) || null;
  }
};

// Fetch Teams
export const fetchTeams = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/teams`);
    if (!response.ok) {
      console.warn('API unavailable, using mock teams');
      return MOCK_TEAMS;
    }
    const data = await response.json();
    return data.teams || MOCK_TEAMS;
  } catch (error) {
    console.error('Error en fetchTeams:', error);
    console.warn('Using mock teams instead');
    return MOCK_TEAMS;
  }
};

// Fetch Villains
export const fetchVillains = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/villains`);
    if (!response.ok) {
      console.warn('API unavailable, using mock villains');
      return MOCK_VILLAINS;
    }
    const data = await response.json();
    return data.villains || MOCK_VILLAINS;
  } catch (error) {
    console.error('Error en fetchVillains:', error);
    console.warn('Using mock villains instead');
    return MOCK_VILLAINS;
  }
};
