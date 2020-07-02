import React from 'react';
import Panel from './Panel';
import Board from './Board';

import './styles/Game.css';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div>
          <Panel />
        </div>
      </div>
    );
  }
}

export default Game;