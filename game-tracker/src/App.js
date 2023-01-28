import React, { useState } from 'react';
import './App.scss';
import NavigationBar from './Components/UI/NavBar/NavBar';
import GameList from './Components/GameList/GameList';
import { ThemeProvider } from "@material-tailwind/react";

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
    <ThemeProvider >
      <div className="App">
        <NavigationBar />
        <section id="games-list">
          {content}
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
