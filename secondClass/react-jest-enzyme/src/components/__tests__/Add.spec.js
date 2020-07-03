import React from 'react';
import { mount, shallow, render } from 'enzyme';

import Add from '../Add';
import Form from '../Form';
let wrapper;

beforeEach(() => {
    wrapper = mount(<Add />);
});

/*
Mounting
Full DOM rendering including child components
Ideal for use cases where you have components that may interact with DOM API, or use React lifecycle methods in order to fully test the component
As it actually mounts the component in the DOM .unmount() should be called after each tests to stop tests affecting each other
Allows access to both props directly passed into the root component (including default props) and props passed into child components

Shallow
Renders only the single component, not including its children. This is useful to isolate the component for pure unit testing. It protects against changes or bugs in a child component altering the behaviour or output of the component under test
As of Enzyme 3 shallow components do have access to lifecycle methods by default
Cannot access props passed into the root component (therefore also not default props), but can those passed into child components, and can test the effect of props passed into the root component. This is as with shallow(<MyComponent />), you're testing what MyComponent renders - not the element you passed into shallow

Render
Renders to static HTML, including children
Does not have access to React lifecycle methods
Less costly than mount but provides less functionality

*/


describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render one <Form>', () => {
        expect(wrapper.find(Form)).toHaveLength(1);
    });

    it('should render 2 <label>s', () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });
});


//https://blog.usejournal.com/testing-with-jest-and-enzyme-in-react-part-4-shallow-vs-mount-in-enzyme-d60cad73f85c