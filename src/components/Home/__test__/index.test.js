import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';
describe("Home", () => {
  it("should render my component", () => {
    const props = { 
        data: {
            metadata: { title: 'Title' },
            features: [{
                id:'1', 
                properties:{title:'title', mag: 'mag', time: 'time', status: 'status', tsunami: 'tsunami', type: 'type'}
            }], 
        }
    };
    const wrapper = shallow(<Home {...props}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});