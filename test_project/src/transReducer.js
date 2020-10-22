const { act } = require("react-dom/test-utils");

const TransactionReducer = ((state, action)=>{
    switch(action.type){
        case 'ADD': {
            return [action.payload, ...state]
        }
        default:
            return state;
    }
});

export default TransactionReducer;