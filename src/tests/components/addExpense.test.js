import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../Components/AddPage';
import ExpenseForm from '../../Components/expenseForm';
import expensesList from '../fixturesDb/expensesList';

let addExpense,historySpy,wrapper;

beforeEach(()=>{
    addExpense = jest.fn()
    historySpy  = {push:jest.fn()}
    wrapper = shallow(
        <AddExpensePage addExpense = {addExpense}
        history={historySpy}
        expense={expensesList[1]}/>
        )
})

test("Should submit the form correctly !", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("should handle onSubmit function inside the expenseForm", ()=>{
    wrapper.find(ExpenseForm).prop("onSubmit")(expensesList[1])
    expect(addExpense).toHaveBeenLastCalledWith(expensesList[1])
    expect(historySpy.push).toHaveBeenLastCalledWith("/")
})