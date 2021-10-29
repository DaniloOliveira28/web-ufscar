import React from 'react';
import './Panel.css';

const Panel = (props) => {
  return (
    <div className="game-info">
      <div>{props.status}</div>
      <ol>{props.moves}</ol>
    </div>
  );
  
}

export default Panel;