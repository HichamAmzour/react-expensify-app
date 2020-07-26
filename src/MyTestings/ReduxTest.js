import  { createStore } from 'redux';

    const increment= ({incrementBy = 1} = {} )=>({
        type:'INCREMENT',
        incrementBy
    });

const decrement= ({decrementBy = 1} = {} )=>({
    type:'DECREMENT',
    decrementBy
});

const reset= ()=>({
    type:'RESET'
});

const setCount=( {value = 0 } = {} ) => ({
    type:'SET',
    value
  });

// reducers are pure funct , never change the state inside or action
const countRedusers=(state = {count:0} , action)=>{

    switch(action.type){
        case 'INCREMENT':{
            return { count : state.count + action.incrementBy };
        }
        case 'DECREMENT':
            return {count : state.count - action.decrementBy};
        case 'RESET' : 
            return {count : 0};
        case 'SET' : 
            return {count : action.value};
        default :
            return state
    }
}

const store = createStore(countRedusers);

const unsubscribe = store.subscribe(()=>console.log(store.getState()));
    
    store.dispatch(increment({incrementBy:5}));
    store.dispatch(increment());
// unsubscribe();
store.dispatch(decrement({decrementBy:5}));
store.dispatch(setCount({value:100}));
store.dispatch(reset());