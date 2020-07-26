import expensesList from '../fixturesDb/expensesList';
import moment from 'moment';
import expenseReducer from '../../ReduxFolder/reducers/expenseReducer';


test('Should set default state',()=>{
    const result = expenseReducer(undefined,{type:'@@INIT'})
    expect(result).toEqual([])
})

test("Should add a new expense to the state array !! ",()=>{
    const expense={
        description:'coffe',
        notes:'',
        createdAt:moment().valueOf()
    }
    const action = {
        type:'ADD_EXPENSE',
        expense:expense
    }
    const result = expenseReducer(expensesList,action)
    expect(result).toEqual([...expensesList, expense])
})

test("Should remove an expense from the state array !! ",()=>{
    const result= expenseReducer(expensesList, {type:'REMOVE_EXPENSE', id:'2'})
    expect(result).toEqual([expensesList[0],expensesList[2]])
})

test("Should not remove an expense from the state array with a none existed id !! ",()=>{
    const result= expenseReducer(expensesList, {type:'REMOVE_EXPENSE', id:'-14'})
    expect(result).toEqual(expensesList)
})

test("Should  edit existing expense object in the state array !! ",()=>{
    const amount=4500
    const expense={
        description:'card',
        amount,
        notes:''
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:'1',
        updates:expense
    }
    const result= expenseReducer(expensesList,action)
  
    expect(result[0]).toEqual({...expensesList[0],...expense})
})

test("Should  not edit none existing expense object in the state array !! ",()=>{
    const expense={
        description:'card',
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:'-11',
        updates:expense
    }
    const result= expenseReducer(expensesList,action)
  
    expect(result).toEqual(expensesList)
})