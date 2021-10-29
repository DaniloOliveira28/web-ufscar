import React from 'react';
import { mount, shallow, render } from 'enzyme';

import Square from '../Square';

let wrapper;
let value = 'X'

beforeEach(() => {
    wrapper = mount(<Square value={value} onClick={() => {}}/>);
});

describe('<Square /> rendering', () => {
  it('should render properly', () => {
      expect(wrapper.find('button')).toHaveLength(1);

      expect(wrapper.props().value).toEqual(value)

      expect(['X', 'O']).toContain(wrapper.props().value) 
  });

  it('should allow the user to click', () => {
    let newvalue = null;
    let newWrapper = mount(<Square value={newvalue} onClick={() => { newvalue = 'X'}}/>);

    newWrapper.find('button').simulate('click');

    expect(['X']).toContain(wrapper.props().value) 

});


});