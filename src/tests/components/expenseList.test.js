import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../Components/expensesList';
import expensesList from '../fixturesDb/expensesList';

test("Should render expense list with expenses items",()=>{
    const wrapper =  shallow(<ExpenseList expenses={expensesList}/>);
    expect(wrapper).toMatchSnapshot();
});

test("Should render a message when the expenses list is Empety ",()=>{
    const wrapper =  shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
