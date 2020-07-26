import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './expenseListFilter';

const ExpenseDashboard=()=>(
    <div>
       <p>this is Expense Dashboard component</p>
       <ExpenseListFilters/>
       <ExpenseList/>
    </div>
);

export default ExpenseDashboard;