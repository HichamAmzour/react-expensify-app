import moment from 'moment';

//REDUCER FOR FILTERS
const filterState={
    text:'',
    sortBy:'amount', //or date,
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
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

export default filterReducer;