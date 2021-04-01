import React from 'react';
import { shallow } from 'enzyme';
import NarBar from '../index';
describe("NarBar", () => {
  it("should render my component", () => {
    const props = { 
      site: {
        title: 'Title',
        imageLogo: ''
      },
      firstName: 'John'
    };
    const wrapper = shallow(<NarBar {...props}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});