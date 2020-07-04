import React, { Component } from 'react';
import { Button } from '../../button';
import { Input } from '../../input';
import PropTypes from 'prop-types';
import { Loading } from '../../Loading';
import './Property.scss';
import House from "./../../../assets/images/result01.jpg";


class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      country: '',
      description: '',
      user: this?.props?.info?.user?.email ?? '',
      loading: false
    };
    // this.onSaveProperty = this.onSaveProperty.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  onSaveProperty() {
    // const { saveProperty } = this.props;
    // const property = {
    //   address: this.state.address,
    //   city: this.state.city,
    //   country: this.state.country,
    //   description: this.state.description,
    //   user: this.props.info.user.email
    // };
    // this.setState({ loading: true });
    // saveProperty(property)
    //   .then(() =>
    //     setTimeout(() => this.setState({ loading: false }), 5000)
    //   );
  }

  onChange(field) {
    return (data) => {
      this.setState({ [field]: data.target.value });
    }
  }

  render() {
    const { address, city, country, description, loading } = this.state;
    return (
      <article className="admin__property">
        <img src={House} alt="house" />
        <div className="admin__form">
          {loading && (<Loading
            type={'spinningBubbles'}
          />)}
          <p>
            <Input
              ariaLabel='address'
              className='admin__normal'
              id='address'
              label='Address'
              name='address'
              onChange={this.onChange('address')}
              value={address}
            />
          </p>
          <p>
            <Input
              ariaLabel='city'
              className='admin__normal'
              id='city'
              label='City'
              name='city'
              onChange={this.onChange('city')}
              value={city}
            />
          </p>
          <p>
            <Input
              ariaLabel='country'
              className='admin__normal'
              id='country'
              label='Country'
              name='country'
              onChange={this.onChange('country')}
              value={country}
            />
          </p>
          <p>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              aria-label="description"
              value={description}
              onChange={this.onChange('description')}
              className="admin__description">
            </textarea>
          </p>
          <Button
            alt={'search'}
            onClick={this.onSaveProperty}
            className={'admin__submit-btn'}
          />
        </div>
      </article>
    );
  }

}

export { Property }

Property.propTypes = {
  saveProperty: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired
}
