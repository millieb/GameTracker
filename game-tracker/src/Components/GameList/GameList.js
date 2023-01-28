import React from 'react';
import './GameList.scss';
import GameItem from '../GameItem/GameItem';
import { Fragment } from "react";
import { Typography } from "@material-tailwind/react";

const GameList = props => {

  return (
    <div>
      <h2 className="my-library-title">
        My Library
      </h2>
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
    </div>
  );
};

export default GameList;