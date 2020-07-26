import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../Components/Header';
// import toJson from 'enzyme-to-json';


import {shallow} from 'enzyme';
test("Should reneder Header component correctly",()=>{
    const wrapper= shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
    // const wrapper= shallow(<Header/>)
    // expect(wrapper.find("h1").text()).toBe("this is the Header Expensify")
})