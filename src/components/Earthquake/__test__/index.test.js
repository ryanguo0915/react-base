import React from 'react';
import { shallow } from 'enzyme';
import Earthquake from '../index';
describe("MyComponent", () => {
  it("should render my component", () => {
    const props = { 
        features: [{id:'1', properties:{title:'title', mag: 'mag', time: 'time', status: 'status', tsunami: 'tsunami', type: 'type'}}], 
        match: { params: {slugifiedId: '1'}}
    };
    const wrapper = shallow(<Earthquake {...props}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  it("should have 1 matched perperty and render tables", () => {
    const props = { 
        features: [{id:'1', properties:{title:'title', mag: 'mag', time: 'time', status: 'status', tsunami: 'tsunami', type: 'type'}}], 
        match: { params: {slugifiedId: '1'}}
    };
    const wrapper = shallow(<Earthquake {...props}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
    const table = wrapper.find('table');
    const row = wrapper.find('tr');
    expect(table).toHaveLength(1);
    expect(row).toHaveLength(6);
  });
});