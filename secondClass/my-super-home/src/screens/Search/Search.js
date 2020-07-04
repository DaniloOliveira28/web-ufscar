import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/home/Header';
import  Copyright  from '../../components/copyright';
import  {Property}  from '../../components/Property/Property';
import  {NotFound}  from '../../components/NotFound/NotFound';
import './Search.scss';

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
          { this.getProperties() &&
            this.getProperties().length > 0 ?
            this.getProperties().map(
              key => <Property key={key} data={properties[key]} />
            ) : <NotFound />
          }
        </section>
        <Copyright />
      </main>
    )
  }
}

export { Search };

Search.propTypes = {
  properties: PropTypes.object.isRequired
}