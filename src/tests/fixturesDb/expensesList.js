import moment from "moment";

export default [
    {
        id:'1',
        amount:150,
        description:'rent',
        notes:'',
        createdAt:moment(0).subtract(4,"days").valueOf()
    },
    {
        id:'2',
        amount:50,
        description:'wifi bill',
        notes:'',
        createdAt:moment(0).add(4,"days").valueOf()
    },
    {
        id:'3',
        amount:250,
        description:'water bill',
        notes:'',
        createdAt:moment(0).add(10,"days").valueOf()
    }
];