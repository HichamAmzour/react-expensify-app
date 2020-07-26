import {addExpenseAction, removeExpenseAction, editExpenseAction} from '../../ReduxFolder/actions/expenseActions';


test("Should remove an expense !",()=>{
    const action = removeExpenseAction("12345a");
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"12345a"
    });
});

test("should add and an expense !!", ()=>{
    const expenseData= {
        description:"coffe",
        notes:"",
        amount:123,
        createdAt:56
    };

    const action = addExpenseAction(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test("Should edit expense",()=>{
    const action= editExpenseAction("1234", {description:"coffe"});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'1234',
        updates:{
            description:'coffe'
        }
    });
});