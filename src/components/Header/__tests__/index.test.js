import { shallow, mount } from 'enzyme'
import React from 'react';
import Header from '../index';

describe('Header', () => {
 it('should be defined', () => {
   expect(Header).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <Header />
   );
   expect(tree).toMatchSnapshot();
 });
 it('should have header title', () => {
  const tree = mount(
    <Header classes={{ title: 'testClass' }} />
  );
  expect(tree.find('.testClass').text()).toEqual('Page Title');
});
});