import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './expenseItem';
import getVisibleExpenses from '../ReduxFolder/selectors/expensesSelector';

//casue we will this this component not connected component to the store
export const ExpenseList = (props)=>(
    <div>
    <h1>Expense List</h1>
    {
        props.expenses.length === 0 ? (<p>There is no expenses in the list</p>) :
        props.expenses.map((ex)=>(
            <ExpenseItem key={ex.id} {...ex}/>
        ))
    }
    </div>
);
const mapStateToProps = (state)=>{
    return {
        expenses : getVisibleExpenses(state.expenses,state.filters)
    };
}
const ConnectToStore = connect(mapStateToProps)(ExpenseList);
export default ConnectToStore;