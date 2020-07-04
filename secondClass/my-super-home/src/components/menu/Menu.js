import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/admin'>Sign in</Link></li>
      <li>Contact</li>
      <li>About</li>
    </ul>
  );
}

export default Menu;