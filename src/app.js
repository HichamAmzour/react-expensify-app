import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Routes/AppRouter';
import store from './ReduxFolder/store/store';
import {addExpenseAction} from './ReduxFolder/actions/expenseActions';
import {setTextFiltersAction} from './ReduxFolder/actions/filterActions';
import getVisibleExpenses from './ReduxFolder/selectors/expensesSelector';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// store.dispatch(addExpenseAction({description:"this is water bill",notes:"water bill",amount:"26",createdAt:120}));
// store.dispatch(addExpenseAction({description:"this is Gaz bill",notes:"Gaz bill",amount:"29",createdAt:340}));
// store.dispatch(addExpenseAction({description:"this is electricity bill",notes:"Gaz bill",amount:"69",createdAt:130}));
// store.dispatch(setTextFiltersAction("water"));

// setTimeout(()=>{
//     store.dispatch(setTextFiltersAction("bill"));
// },3000);

const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));




