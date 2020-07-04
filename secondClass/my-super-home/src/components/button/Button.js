import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button(props) {
  const { type, onClick, alt, className } = props;
  return (
    <button
      type={type}
      alt={alt}
      className={className}
      onClick={onClick}
    />
  )
}

export default Button;

Button.defaultProps = {
  type: 'submit'
}

Button.propTypes = {
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string.isRequired
}

