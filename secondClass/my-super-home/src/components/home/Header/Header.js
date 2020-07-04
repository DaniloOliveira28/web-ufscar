import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../input';
import { Button } from '../../button';
import Menu from '../../menu/Menu';
import { Logotype } from '../../logotype/index';
import './styles/header.scss';
import './styles/main.scss';


const TO_SEARCH = '/search';

const Header = (props) => {

  const [search, setSearch] = useState('');

  const onChange = (data) => {
    setSearch(data.target.value);
  }

  const onClick = () => {}

  return (
    <header className="header">
      <nav className="header_nav" aria-label="navigation-main">
        <Logotype />
        <Menu />
      </nav>
      <section className="main__search">
        <h1>Where do you want to go today?</h1>
        <div className="main__container">
          <Input
            ariaLabel='search'
            id='search'
            name='search'
            onChange={onChange}
            value={search}
          />
          <Button
            alt='search'
            className='button__search'
            onClick={onClick}
          /> 
        </div>
      </section>
    </header>
  )
}

Header.propTypes = {
  fetchProperties: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default Header;

