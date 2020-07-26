import {setEndDateAction,
        setTextFiltersAction,
        sortByAmountAction,
        sortByDateAction,
        setStartDateAction,} from '../../ReduxFolder/actions/filterActions';
import moment from 'moment';

test(
    "Should set start date !",
    ()=>{
        const action= setStartDateAction(moment(0));
        expect(action).toEqual({
            type:'SET_START_DATE',
            startDate:moment(0)
        });
});

test("Should set End date !",
    ()=>{
        const action = setEndDateAction(moment(0));
        expect(action).toEqual({
            type:'SET_END_DATE',
            endDate:moment(0)
        });
    }
);

test(
    "Should Set text filter !",
    ()=>{
        const text="somthing";
        const action = setTextFiltersAction(text);
        expect(action).toEqual({
            type:'SET_TEXT_FILTERS',
            text
        });
    }
);
test(
    "Should Set text filter default value !",
    ()=>{
        const action = setTextFiltersAction();
        expect(action).toEqual({
            type:'SET_TEXT_FILTERS',
            text:''
        });
    }
);
test("Should generat action object for sort by amount !",()=>{
    const action = sortByAmountAction();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT_FILTER',
        sortBy:'amount'
    });
});
test("Should generat action object for sort by date !",()=>{
    const action = sortByDateAction();
    expect(action).toEqual({
        type:'SORT_BY_DATE_FILTER',
        sortBy:'date'
    })
});

