import {createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';

// default state
const demoState = {
    expenses : [{
      id: uuid(),
      description:'January Rent',
      notes:'this was the final payement for tha address',
      amount:54500,
      createdAt:0      
  }],
    filters:{
        text:'rent',
        sortBy:'amount', //or date,
        startDate: undefined,
        endDate: undefined
    }
  }

//ADD EXPENSE ACTION
const addExpenseAction=({id="",description="",notes="",amount=0,createdAt=0} = {})=>({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        notes,
        amount,
        createdAt,
    }
});
// REMOVE_EXPENSE ACTION
const removeExpenseAction=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE ACTION
const editExpenseAction = ({id},updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

// SET TEXT VALUE IN FILTERS ACCTION
const setTextFiltersAction=(text="")=>({
    type:'SET_TEXT_FILTERS',
    text
})
// SORT BY AMOUNT ACTION
const sortByAmountAction = () => ({
    type:'SORT_BY_AMOUNT_FILTER',
    sortBy:'amount'
});
// SORT BY DATE ACTION
const sortByDateAction = () => ({
    type:'SORT_BY_DATE_FILTER',
    sortBy:'date'
});
// SET START DATE ACTION
const setStartDateAction=(startDate)=>({
    type:'SET_START_DATE',
    startDate
});
//SET END DATE
const setEndDateAction=(endDate)=>({
    type:'SET_END_DATE',
    endDate
});
// FILTER EXPENSES
                                            // FILTERS OBJECT SPREADED
const getVisibleExpenses = (expensesList , {text, sortBy, startDate, endDate})=>{

    return expensesList.filter((expense)=>{
        const startDateMatch = typeof startDate !=="number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !=="number" || expense.createdAt <= endDate  ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch ;

    }).sort((firstElem, secondElem)=>{

        if(sortBy === 'date'){
            return firstElem.createdAt < secondElem.createdAt ? 1/*return firstElem*/: -1 /*return second element*/;

        }else if(sortBy === 'amount'){
            return firstElem.amount < secondElem.amount ? 1 : -1;
        }

    });
}


//REDUCER FOR EXPENSE
const expensesStateList=[];
const expenseReducer=(state = expensesStateList, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id != action.id)
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if(expense.id === action.id)
                    return {
                        ...expense,
                        ...action.updates
                    };
                else return expense;
            });
        default:
            return state;
    }
};
//REDUCER FOR FILTERS
const filterState={
    text:'',
    sortBy:'amount', //or date,
    startDate: undefined,
    endDate: undefined
}

const filterReducer=( state = filterState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTERS':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMOUNT_FILTER' :
            return {
                ...state,
                sortBy:action.sortBy
            };
        case 'SORT_BY_DATE_FILTER':
            return {
                ...state,
                sortBy:action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    };
};

// 1 Create store , provide combineReducers, add reducres(switch) to it as object
const store= createStore(combineReducers({
    expenses: expenseReducer,
    filters : filterReducer,
}));

store.subscribe(()=>{
    const state= store.getState();
    const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(filteredExpenses);

});

let exp={
      description:'January Rent',
      notes:'Cofee',
      amount:500,
      createdAt:350
};
let exp1={
    description:'FEBRARY Hotel',
    notes:'ORANGE',
    amount:120,
    createdAt:100
};
let exp2={
    description:'MARCH Rent',
    notes:'TEA',
    amount:200,
    createdAt:400 
};
store.dispatch(addExpenseAction(exp));
store.dispatch(addExpenseAction(exp1));
store.dispatch(addExpenseAction(exp2));
// // store.dispatch(removeExpenseAction(exp));
// store.dispatch(editExpenseAction(exp, {amount:100,notes:"Tea",description:"Febrary Rent"}));
//store.dispatch(setTextFiltersAction("Hotel"));
// store.dispatch(setTextFiltersAction());

//store.dispatch(sortByAmountAction());
//store.dispatch(sortByDateAction());

// store.dispatch(setStartDateAction(100));
// store.dispatch(setEndDateAction(350));


