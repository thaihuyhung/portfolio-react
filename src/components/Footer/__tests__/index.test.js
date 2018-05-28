import { shallow, mount } from 'enzyme'
import React from 'react';
import Footer from '../index';

describe('Footer', () => {
 it('should be defined', () => {
   expect(Footer).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <Footer />
   );
   expect(tree).toMatchSnapshot();
 });
 it('should have footer information', () => {
  const tree = mount(
    <Footer classes={{ container: 'testContainer' }} />
  );
  expect(tree.find('span').text()).toEqual('Thai Huy Hung © 2018');
});
});