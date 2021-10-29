import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';

jest.mock('../../Menu', () => () => <div className="menu" />);

const MOCK_HISTORY = {
  push: jest.fn(),
  location: {
    pathname: '/'
  }
}

const MOCK_FETCH_PROPERTIES = jest.fn().mockImplementation(() => Promise.resolve())

const componentWrapper = () => {
  return mount(
    <Header
      fetchProperties={MOCK_FETCH_PROPERTIES}
      history={MOCK_HISTORY}
    />
  );
}

describe('Header component', () => {
  it('Should render header properly', () => {
    const header = componentWrapper();
    expect(header).toMatchSnapshot();
  });

  it('Should be able to search', () => {
    const header = componentWrapper();
    header.find('button').simulate('click');
    expect(MOCK_FETCH_PROPERTIES).toHaveBeenCalled()
  });

  it('Should be able to type something to search', () => {
    const header = componentWrapper();
    header.find('input').simulate('change', { target: { value: 'Alguma Cidade' }});
    expect(header.find('input').prop('value')).toEqual('Alguma Cidade');
  });

});


