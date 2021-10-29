import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const componentWrapper = ({ props }) => {
  return shallow(
    <Button
      {...props}
    />);
};

describe('Button component', () => {
  it('Should render button properly', () => {
    const props = {
      alt: 'alt', onClick: jest.fn(), className: 'button__search'
    };
    const button = componentWrapper({ props });
    expect(button).toMatchSnapshot();
  });
  it('Should be able to click', () => {
    const props = {
      alt: 'alt', onClick: jest.fn(), className: 'button__search'
    };
    const button = componentWrapper({ props });
    button.find('button').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});


