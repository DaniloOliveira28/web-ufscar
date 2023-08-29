import { useState, useEffect } from 'react';
import Board from '../Board';
import Panel from '../Panel';
import {calculateWinner} from '../../utils/helpers'
import "./Game.css";

const Game = () => {
  const [squares, setSquares] = useState<('X' | 'O' | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);


  const winner = calculateWinner(squares);

  const handleClick = (squareId:number) => {
    console.log('>>> square', squareId)

    
    if (calculateWinner(squares) || squares[squareId]) {
      return;
    }
    const jogada = xIsNext ? "X" : "O";
    const localSquares = [...squares]
    localSquares[squareId] = jogada;
    setSquares(localSquares);

    setXIsNext(!xIsNext)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick}></Board>
      </div>
      <div className="panel">
        <Panel winner={winner}/>
      </div>
    </div>
  );
};

export default Game;
