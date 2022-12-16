import React from 'react';
import './GameList.scss';
import GameItem from '../GameItem/GameItem';

const GameList = props => {

  return (
    <div>
      <ul className="games">
      {props.items.map(game => (
        <GameItem
          key={game.id}
          id={game.id}
        >
          {game.text}
        </GameItem>
      ))}
      </ul>
    </div>
  );
};

export default GameList;