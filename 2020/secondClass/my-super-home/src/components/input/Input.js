import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    type,
    name,
    id,
    ariaLabel,
    onChange,
    value,
    className,
    label
  } = props;

  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        name={name}
        id={id}
        aria-label={ariaLabel}
        onChange={onChange}
        value={value}
        className={className}
      />
    </label>
  )
}

export default Input;

Input.defaultProps ={
  type: 'text',
  value: void 0,
  className: void 0,
  label: void 0
}

Input.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string
}
