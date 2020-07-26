import React from "react";
import {shallow} from 'enzyme';
import ExpenseForm from '../../Components/expenseForm';
import expenseList from "../fixturesDb/expensesList";
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

test("Should render the expense form correctly", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render expense form correctly with a given expense",()=>{
    const wrapper = shallow(<ExpenseForm expense={expenseList[0]} />)
    expect(wrapper).toMatchSnapshot();
})

test("Should render submited valid expense form",()=>{
    const wrapper = shallow(<ExpenseForm />);
    // the first snapshot
    expect(wrapper).toMatchSnapshot()
    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{}
    })
    //here we will check the expense from state using
    expect(wrapper.state("error").length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test("Should set the description correctly on the description input",()=>{
    const value='new description'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find("input").at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state("description")).toBe(value)
})

test("Should set the Notes correctly on the notes textarea input",()=>{
    const value='new Notes'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find("textarea").simulate('change',{
        target:{value}
    })
    expect(wrapper.state("notes")).toBe(value)
})

test("Should set amount correctly on the amount input ", ()=>{
    const wrapper = shallow(<ExpenseForm />)
    const value = '232.24'
    wrapper.find("input").at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state("amount")).toBe(value)
})

test("Should not set the amount if its invalid ", ()=>{
    const wrapper = shallow(<ExpenseForm />)
    // its is invalid value
    const value = '23.2422'
    wrapper.find("input").at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state("amount")).toBe('')
})

// test("Should call onSubmit prop on from submission",()=>{
//     const onSubmitSpy = jest.fn();
//     onSubmitSpy('Hicham','Amzour');
//     expect(onSubmitSpy).toHaveBeenCalledWith('Hicham','Amzour');
// })
test("Should call onSubmit prop on from submission",()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenseList[0]} onSubmit={onSubmitSpy}  />)
    // you need to fire the form submission to get access to the other condition part , see expeneseForm to understand
    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{}
    })

    expect(wrapper.state("error")).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenseList[0].description,
        notes:expenseList[0].notes,
        amount:expenseList[0].amount,
        createdAt:expenseList[0].createdAt,
    });
})


test("Should set CreatedAt Date ",()=>{
    const now= moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now)

    expect(wrapper.state("createdAt")).toEqual(now)
})

test("Should set calandarFocused correctely ! ",()=>{
    const focused= false
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused})

    expect(wrapper.state("calandarFocused")).toBe(focused)
})