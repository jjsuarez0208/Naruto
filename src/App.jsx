import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import BottomMenu from './components/BottomMenu.jsx';
import Home from './pages/Home.jsx';
import Characters from './pages/Characters.jsx';
import Teams from './pages/Teams.jsx';
import Villains from './pages/Villains.jsx';
import About from './pages/About.jsx';
import Favorites from './pages/Favorites.jsx';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('narutoFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addToFavorites = (character) => {
    if (!favorites.some(fav => fav.id === character.id)) {
      const newFavorites = [...favorites, character];
      setFavorites(newFavorites);
      localStorage.setItem('narutoFavorites', JSON.stringify(newFavorites));
    }
  };

  const removeFromFavorites = (characterId) => {
    const newFavorites = favorites.filter(fav => fav.id !== characterId);
    setFavorites(newFavorites);
    localStorage.setItem('narutoFavorites', JSON.stringify(newFavorites));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/characters" 
              element={<Characters addToFavorites={addToFavorites} favorites={favorites} />} 
            />
            <Route path="/teams" element={<Teams />} />
            <Route path="/villains" element={<Villains />} />
            <Route 
              path="/favorites" 
              element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} 
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
