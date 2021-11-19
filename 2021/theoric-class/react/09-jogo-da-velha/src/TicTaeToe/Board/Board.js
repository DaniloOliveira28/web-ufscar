import React from 'react';
import Square from '../Square/Square';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './Board.css';

const Board = (props) => {

  const renderSquare = (i) => (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
    />
  );

  return (
    <div>
      <ErrorBoundary>
      <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      </ErrorBoundary>
    </div>
  );
}

export default Board;