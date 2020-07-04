import React, {useState} from 'react';
import Panel from '../Panel/Panel';
import Board from '../Board/Board';

import './Game.css';
import {calculateWinner} from '../common/utils';

const Game = () => {

  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null)
    }
  ]);

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "T");
  }


  const handleClick = (i) => {
    console.log('>>> square', i)
    const localHistory = history.slice(0, stepNumber + 1);
    const current = localHistory[localHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "T";

    setHistory(history.concat([
      {
        squares: squares
      }
    ]))
    setStepNumber(history.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step) => {
    setStepNumber(step)
    setXIsNext((step % 2) === 0)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div>
        <Panel status={status} moves={moves} />
      </div>
    </div>
  );
}

export default Game;