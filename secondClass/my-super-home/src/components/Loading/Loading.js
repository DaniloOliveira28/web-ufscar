import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import './loading.scss';

function Loading({ type }) {
  return (
    <div className='loading'>
      <ReactLoading
        type={type}
        color='#fff'
        height={300}
        width={300}
      />
    </div>
  );
}

export { Loading };

Loading.propTypes = {
  type: PropTypes.string.isRequired
}
