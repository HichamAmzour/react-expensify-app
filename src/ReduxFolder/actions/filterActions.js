

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

export {
    setEndDateAction,
    setTextFiltersAction,
    sortByAmountAction,
    sortByDateAction,
    setStartDateAction,
}