import React from 'react';
import PropTypes from 'prop-types';
import HouseImg from "../../assets/images/result01.jpg";

function Property(props) {
  const { data } = props;
  return (
    <article>
      <img src={HouseImg} className="property__image" alt="house" />
      <div className="property__details">
        <p className="property__details__header">
          Country: {data.country}
        </p>
        <p className="property__details__header">
          City: {data.city}
        </p>
        <p className="property__details__description">
          {data.description}
        </p>
        <p className="property__details__description">
          Address: {data.address}
        </p>
        <p className="property__details__description">
          Owner: {data.user}
        </p>
      </div>
    </article>
  )
}

export { Property };

Property.propTypes = {
  data: PropTypes.object.isRequired
}
