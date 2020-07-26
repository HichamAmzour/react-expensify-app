import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';


// 1 Create store , provide combineReducers, add reducres(switch) to it as object
const store= createStore(combineReducers({
    expenses: expenseReducer,
    filters : filterReducer,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

// store.subscribe(()=>{
//     const state= store.getState();
//     const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(filteredExpenses);

// });


export default store;