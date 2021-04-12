import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Main from './MainComponent';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factor function to create ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Main/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders main', () => {
    const wrapper = setup();
    const formComponent = findByTestAttr(wrapper, "main-render");
    expect(formComponent.length).toBe(1);
})