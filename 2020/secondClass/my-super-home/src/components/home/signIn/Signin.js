import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../button/index';
import './signin.scss';

const Signin = props => {
  const { doAuthentication, history } = props;

  const onLogin = () => {
    doAuthentication(history);
  }

  return (
    <section className="signin">
      <hgroup>
        <h2>
          myHome is the site where you can find new rooms or house to rent  for a short or big season all around the world.
      </h2>
        <h3>
          Sign-in and find out places where you can rent a house or room during your journey.
      </h3>
      </hgroup>
      <Button
        className='button__signin'
        alt='Signin'
        onClick={onLogin}
      />
    </section>
  );
}

Signin.propTypes = {
  history: PropTypes.object.isRequired,
  doAuthentication: PropTypes.func.isRequired
}

export default Signin;

