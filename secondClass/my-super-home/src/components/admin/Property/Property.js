import React, { useState } from 'react';
import { Button } from '../../button';
import { Input } from '../../input';
import PropTypes from 'prop-types';
import { Loading } from '../../Loading';
import './Property.scss';
import House from "./../../../assets/images/result01.jpg";


const Property = props => {


  console.log('>>> address', props.info.user.info);

  const [state, setState] = useState({
    address: '',
    city: '',
    country: '',
    description: '',
    user: this?.props?.info?.user?.email ?? '',
    loading: false
  });
  const [loading, setLoading] = useState(false);

  const onLocalSaveProperty = () => {
    // const { saveProperty } = this.props;
    const property = {
      address: state.address,
      city: state.city,
      country: state.country,
      description: state.description,
      user: props.info.user.email
    };

    setLoading(true);
    props.saveProperty(property)
      .then(() =>
        setTimeout(() => setLoading(false), 5000)
      );
  }

  const onChange = (field) => {
    return (data) => {
      setState({
        ...state,
        [field]: data.target.value
      })
    }
  }


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
            onChange={onChange('address')}
            value={state.address}
          />
        </p>
        <p>
          <Input
            ariaLabel='city'
            className='admin__normal'
            id='city'
            label='City'
            name='city'
            onChange={onChange('city')}
            value={state.city}
          />
        </p>
        <p>
          <Input
            ariaLabel='country'
            className='admin__normal'
            id='country'
            label='Country'
            name='country'
            onChange={onChange('country')}
            value={state.country}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            aria-label="description"
            value={state.description}
            onChange={onChange('description')}
            className="admin__description">
          </textarea>
        </p>
        <Button
          alt={'search'}
          onClick={onLocalSaveProperty}
          className={'admin__submit-btn'}
        />
      </div>
    </article>
  );

}

export { Property }

Property.propTypes = {
  saveProperty: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired
}
