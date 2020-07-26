import React from 'react';
import ExpenseForm from './expenseForm';
import {connect} from 'react-redux';
import {addExpenseAction} from '../ReduxFolder/actions/expenseActions';


export class AddExpensePage extends React.Component{

    onSubmit = (expense)=>{
        // props.dispatch(addExpenseAction(expense));
        this.props.addExpense(expense)
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <p>this is Add Expense Page component</p>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        ) 
    }
}

const matchDispatchToProps = (dispatch)=>(
    {
        addExpense : (expense)=>{
            dispatch(addExpenseAction(expense))
        }
    } 
)

export default connect(undefined,matchDispatchToProps)(AddExpensePage);