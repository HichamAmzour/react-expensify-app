import React from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css'; // use it in the app main file


// const now=moment();
// console.log(now.format('MMMM Do, YYYY'));
export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount/100 : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            notes: props.expense ? props.expense.notes : '',
            calandarFocused:false,
            error:'',
        };
    }

    onAmountChange = (e)=>{
    //    e.presest();
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({
                amount
            }));
        }
    };
    onNotesChange = (e)=>{
        const notes=e.target.value;
        this.setState(()=>({
           notes
        }));
    };
    onCreatedAtChange = (e)=>{
        const createdAt=e.target.value;
        this.setState(()=>({
            createdAt
        }));
    };
    onDescriptionChange = (e)=>{
        const description= e.target.value
        this.setState(()=>({
            description
        }));
    };

    onDateChange = (createdAt)=>{
        if(createdAt){
            this.setState(()=>({
                createdAt
            }));
        }
    };
    onFocusChange = ({focused}) =>{
        this.setState(()=>({
            calandarFocused: focused
        }));
    };

    setError = (error)=>{
        this.setState(()=>({
            error
        }))
    };

    onSubmit = (e)=>{
        e.preventDefault();
       
        if(!this.state.description || !this.state.amount){
            this.setError("You must provide a descripton/ amount");
        }
        else{
            this.setError("");
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                notes:this.state.notes
            });
        }
    };

    render(){
        return (
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}> 
              <label>Description : </label>
              <input value={this.state.description} onChange={this.onDescriptionChange}  /><br/><br/>
              <label>Amount : </label>
              <input value={this.state.amount} onChange={this.onAmountChange}/><br/><br/>
              <label type="number">Notes : </label>
              <textarea  value={this.state.notes} onChange={this.onNotesChange}  /><br/><br/>
              <div>
              <label type="number">CreatedAt : </label>
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calandarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                />
              </div>
              {
                  !this.props.expense ?  <button>Add Expense</button> : <button>Edit Expense</button>
              }
              
            </form>
          </div>
        );
    }

}