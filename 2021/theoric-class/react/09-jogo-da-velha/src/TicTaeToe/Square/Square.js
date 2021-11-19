import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

function Square(props) {
  if (props.value !== 'X' && props.value !== 'O' && props.value !== null){
    throw new Error('I crashed!');
  }
  return (

    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>

  );
}

Square.propTypes = {
  value: PropTypes.oneOf([ 'X', 'O' ]),
}

export default Square;