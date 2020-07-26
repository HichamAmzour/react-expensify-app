import filterReducer from '../../ReduxFolder/reducers/filterReducer';
import moment from 'moment';

const filterState={
    text:'',
    sortBy:'amount', //or date,
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
}

test("Should filter by default !",()=>{
    const result = filterReducer(undefined,{type:'@@INIT'})
    expect(result).toEqual({
        ...filterState
    })
})

test("Should sort by amount !", ()=>{
    const result = filterReducer(undefined,{type:'SORT_BY_AMOUNT_FILTER',sortBy:'amount'})
    expect(result).toEqual({ ...filterState, sortBy:'amount'})
})

test("Should sort by date !", ()=>{
    const result = filterReducer(undefined,{type:'SORT_BY_DATE_FILTER',sortBy:'date'})
    expect(result.sortBy).toBe('date')
})

test("Should set the  start date !", ()=>{
    const result = filterReducer(undefined,{type:'SET_START_DATE',startDate:moment(0)})
    expect(result.startDate).toEqual(moment(0))
})

test("Should set the  end date !", ()=>{
    const result = filterReducer(undefined,{type:'SET_END_DATE',endDate:moment(0).endOf('month')})
    expect(result.endDate).toEqual(moment(0).endOf('month'))
})
