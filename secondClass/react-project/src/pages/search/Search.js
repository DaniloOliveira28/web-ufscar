import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/components/Header';
import { Copyright } from '../../common/components/Copyright';
import { Property } from './Property';
import { NotFound } from './NotFound';
import './styles/style.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.getProperties = this.getProperties.bind(this);
  }

  getProperties() {
    const { properties } = this.props;
    return Object.keys(properties);
  }

  render() {
    const { properties } = this.props;
    return (
      <main className="body search">
        <Header />
        <section className="search__content">
          {
            this.getProperties().length > 0 ?
            this.getProperties().map(
              key => <Property key={key} data={properties[key]} />
            ) : <NotFound />
          }
          <Copyright />
        </section>
      </main>
    )
  }
}

export { Search };

Search.propTypes = {
  properties: PropTypes.object.isRequired
}