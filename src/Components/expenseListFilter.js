import React from 'react';
import { connect} from 'react-redux';
import { 
    setTextFiltersAction,
    sortByAmountAction,
    sortByDateAction,
    setStartDateAction,
    setEndDateAction
} from '../ReduxFolder/actions/filterActions';

import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component{

    state={
        focusedInput:null
    }
                    //its takes an object
    onDatesChange = ({startDate, endDate})=>{
        this.props.dispatch(setStartDateAction(startDate));
        this.props.dispatch(setEndDateAction(endDate));
    };

    onFocusChange = (focusedInput)=>{
        this.setState(()=>({focusedInput}));
    };

    render(){
        return (
            <div>
                <input value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFiltersAction(e.target.value));
                }}/>
                <div>
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        startDateId={this.props.filters.startDate+""}
                        endDate={this.props.filters.endDate}
                        endDateId={this.props.filters.endDate+""}
                        onDatesChange={this.onDatesChange}
                        onFocusChange={this.onFocusChange}
                        focusedInput={this.state.focusedInput}
                        numberOfMonths={1}
                        isOutsideRange={()=> false}
                        showClearDates={true}
                    />
                </div>
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    e.target.value ==='amount' ? 
                    this.props.dispatch(sortByAmountAction()):
                    this.props.dispatch(sortByDateAction())
                }}>
                    <option value="date">By Date</option>
                    <option value="amount">By Amount</option>
                </select>
            </div>
        );
    }

}


export default connect((state)=>({
    filters : state.filters
}))(ExpenseListFilters);

