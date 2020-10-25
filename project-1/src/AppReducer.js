
const reducer = (state, action) => {
    switch (action.type) {
        case 'Add_Transaction':
            return [action.payload, ...state];
        case 'Delete_Transaction': {

            let new_array = [];
            for (let i = 0; i < state.length; i++) {
                if (i !== action.index)
                    new_array.push(action.transactionsHistory[i]); console.log(action.index);
            }
            return new_array;
        }
        default:
            return state;
    }
}

export default reducer;