import React from 'react';
import {shallow} from 'enzyme';
import ExpenesItem from '../../Components/expenseItem';
import expensesList from '../fixturesDb/expensesList';


test("should render expense item !", ()=>{
    const wrapper= shallow(<ExpenesItem {...expensesList[0]} />)
    expect(wrapper).toMatchSnapshot()
})