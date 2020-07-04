import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Logotype } from '../../logotype';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import './AdminHeader.scss';

const AdminHeader = props => {

  const { user } = props?.info ?? {};
  
  const history  = useHistory();


  const onLogout = () => {
    props.doLogout();
    history.push('/');
  }

  return (
    <header className="admin-header">
      <nav aria-label="navigation admin header">
        <div>
          <Logotype />
          <div className="admin-header__logout-container">
            <p className="admin-header__name">{user?.displayName}</p>
            <p className="admin-header__logout"><Link to='/' onClick={onLogout}>Logout</Link></p>
          </div>
        </div>
        <ul>
          <li>
            <div className="admin-header__div_avatar">
               <span>Profile</span>
                <img src={user?.photoURL} alt="Avatar" className="avatar" />
            </div>
          </li>
          <li className="admin-header__offer"><span>Offer</span></li>
          <li className="admin-header__community"><span>Community</span></li>
        </ul>
      </nav>
    </header>
  );
}

export default AdminHeader;

AdminHeader.propTypes = {
  doLogout: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired
}
