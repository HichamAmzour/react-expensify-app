import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../Components/NotFound';

test("should render not found page correctly !", ()=>{
    const wrapper= shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
})