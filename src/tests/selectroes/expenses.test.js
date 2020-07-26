import getVisibleExpenses from '../../ReduxFolder/selectors/expensesSelector';
import moment from 'moment';
import expensesList from '../fixturesDb/expensesList';

test("Should filter by text value",()=>{
    const filters={
        text:'bill',
        sortBy:'amount',
        startDate:undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expensesList,filters);
    expect(result).toEqual([ expensesList[2],expensesList[1] ]);
});

test("Should filter by start date !", ()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    };
    const result= getVisibleExpenses(expensesList, filters);
    expect(result).toEqual([expensesList[2],expensesList[1]]);
});

test("Should filter by end date !", ()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(4,'days')
    };
    const result= getVisibleExpenses(expensesList, filters);
    expect(result).toEqual([expensesList[1],expensesList[0]]);
});
test("Should sort by date !", ()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result= getVisibleExpenses(expensesList, filters);
    expect(result).toEqual([expensesList[2],expensesList[1], expensesList[0]]);
});

test("Should filter by amount !", ()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    };
    const result= getVisibleExpenses(expensesList, filters);
    expect(result).toEqual([expensesList[2],expensesList[0], expensesList[1]]);
});