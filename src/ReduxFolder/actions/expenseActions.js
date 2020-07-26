import { v4 as uuid } from "uuid";

//ADD EXPENSE ACTION
const addExpenseAction=({description="",notes="",amount=0,createdAt=0} = {})=>({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        notes,
        amount,
        createdAt,
    }
});
// REMOVE_EXPENSE ACTION
const removeExpenseAction=(id)=>({
    type:'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE ACTION
const editExpenseAction = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

export {
    removeExpenseAction,
    editExpenseAction,
    addExpenseAction
}