import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import InputComponent from './InputComponent';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factor function to crate ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<InputComponent/>);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders input', () => {
    const wrapper = setup();
    const formComponent = findByTestAttr(wrapper, "input-render");
    expect(formComponent.length).toBe(1);
});