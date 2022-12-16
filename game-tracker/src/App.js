import React, { useState } from 'react';
import './App.scss';
import GameList from './Components/GameList/GameList';

function App() {
  const [gameLibrary, setGameLibrary] = useState([
    { title: 'Game 1', id: 'g1' },
    { title: 'Game 2', id: 'g2' }
  ]);
  
  let content = (
    <p style={{ textAlign: 'center' }}>No games found. Maybe add one?</p>
  );
  
  if (gameLibrary.length > 0) {
    content = (
      <GameList items={gameLibrary} />
    );
  }

  return (
    <div className="App">
      <section id="games-list">
        {content}
      </section>
    </div>
  );
}

export default App;
