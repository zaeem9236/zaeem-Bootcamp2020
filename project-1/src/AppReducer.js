import TransactionHistory from "./components/TransactionHistory";

const reducer = (state, action)=>{
    switch (action.type){
        case 'Add_Transaction':
            return [action.payload,...state];
        case 'Delete_Transaction':{
            // console.log (action.target.currentTarget.parentNode.parentNode);
            // console.log(action.transactionsHistory);
            // return [...state];
            // console.log(delete action.transactionsHistory[action.index]);
            console.log(delete state[action.index]);
            }
        default:
            return state;

        
    }
}

export default reducer;