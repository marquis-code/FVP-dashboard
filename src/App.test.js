import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';
import "./Common/User-nav"
import UserNav from './Common/User-nav';
import { findByTestAttr } from './test/testUtils';

Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = ()=> shallow(<App/>);

test('renders without error', () => {

  // const wrapper = setup()
  // const navLink = findByTestAttr(wrapper, "nav-component" );
  // expect(navLink.length).toBe(1);

});

// test('renders icon', () => {
//   const wrapper = setup()
//   const navLinkButton = findByTestAttr(wrapper, "button-icon" );
//   expect(navLinkButton.length).toBe(1);

// });

// test('renders button', () => {
//   const wrapper = setup();
//   const navLink = findByTestAttr(wrapper, "nav-component" );
//   expect(navLink.length).toBe(1);

// });



