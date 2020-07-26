import React from 'react';
import ExpenseForm from '../../Components/expenseForm';
import {EditExpensePage} from '../../Components/EditPage';
import {shallow} from 'enzyme';
import ExpensesList from '../fixturesDb/expensesList';   

let wrapper, props

beforeEach(()=>{
    props={
        editExpense  : jest.fn(),
        removeExpense  : jest.fn(),
        match : {
            params:{
                id:ExpensesList[0].id
            }
        },
        history  : {
             push: jest.fn() 
            },
        expense: ExpensesList[0]
    }
    wrapper = shallow(<EditExpensePage  {...props} />)
});

test("Should render correctly editPage !", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("Should handle edit Expense", ()=>{
    wrapper.find(ExpenseForm).prop("onSubmit")(props.expense)
    expect(props.history.push).toHaveBeenLastCalledWith("/")
    expect(props.editExpense).toHaveBeenLastCalledWith(props.expense.id,props.expense)

})

test("Should handle remove Expense", ()=>{
    wrapper.find("button").simulate('click')
    expect(props.history.push).toHaveBeenLastCalledWith("/")
    expect(props.removeExpense).toHaveBeenLastCalledWith(props.expense.id)
    
})

