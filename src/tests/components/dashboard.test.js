import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashBoard from '../../Components/ExpenseDashboard';

test("should render expense Dashboard correctly !", ()=>{
    const wrapper= shallow(<ExpenseDashBoard />)
    expect(wrapper).toMatchSnapshot()
})