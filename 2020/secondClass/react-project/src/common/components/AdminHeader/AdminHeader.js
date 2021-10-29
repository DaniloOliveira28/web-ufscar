import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Logotype } from '../Logotype';
import { Link, withRouter } from 'react-router-dom';
import './styles/admin-header.scss';

class AdminHeader extends Component {
  constructor(props) {
    super(props)
    this.onLogout = this.onLogout.bind(this);
  }


  onLogout() {
    this.props.doLogout();
  }

  render() {
    const { user } = this.props.info;

    return (
      <header className="admin-header">
        <nav aria-label="navigation admin header">
          <div>
            <Logotype />
            <div className="admin-header__logout-container">
              <p className="admin-header__name">{user.displayName}</p>
              <p className="admin-header__logout"><Link to='/' onClick={this.onLogout}>Logout</Link></p>
            </div>
          </div>
          <ul>
            <li>
              <div className="admin-header__div_avatar">
                 <span>Profile</span>
                  <img src={user.photoURL} alt="Avatar" class="avatar" />
              </div>
            </li>
            <li className="admin-header__offer"><span>Offer</span></li>
            <li className="admin-header__community"><span>Community</span></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(AdminHeader);

AdminHeader.propTypes = {
  doLogout: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired
}
