import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../common/components/Button';
import { withRouter } from 'react-router-dom';
import './styles/signin.scss';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const { doAuthentication, history } = this.props;
    doAuthentication(history);
  }

  render() {
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
          onClick={this.onLogin}
        />
      </section>
    );
  }
}

export default withRouter(Signin)

Signin.propTypes = {
  history: PropTypes.object.isRequired,
  doAuthentication: PropTypes.func.isRequired
}