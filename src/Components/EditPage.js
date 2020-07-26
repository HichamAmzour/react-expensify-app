import React from 'react';
import { connect } from 'react-redux';
import { editExpenseAction, removeExpenseAction } from '../ReduxFolder/actions/expenseActions';
import ExpenseForm from './expenseForm';

export class EditExpensePage extends React.Component {

    editExpense = (expense)=>{
        this.props.EditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    removeExpense =  (id) => { 
        this.props.removeExpense(id);
        this.props.history.push('/');
    }

    render(){

        return (
            <div>
               <p>Editing the element that has Id: {this.props.match.params.id}</p>
               <ExpenseForm 
                 expense={this.props.expense} 
                 onSubmit={this.editExpense}
                />
            <button onClick={this.removeExpense(this.props.expense.id)} 
            >Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return ({
        EditExpense : (id, expense)=>{
            dispatch(editExpenseAction(id,expense))
        },
        removeExpense : (id)=>{
            dispatch(removeExpenseAction(id))
        }
    })
}

const mapStateToProps= (state, props) => {
  
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);