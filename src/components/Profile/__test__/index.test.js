import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../index';
describe("NarBar", () => {
  it("should render my component", () => {
    const props = { 
      profile: {avatarImage:'imageMock', bio: 'bioMock', email: 'emailMock', firstName: 'First Name', lastName: 'Last Name', phone: 'Phone'} 
    };
    const wrapper = shallow(<Profile {...props}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});