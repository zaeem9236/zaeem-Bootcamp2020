const reducer = (state, action)=>{
    switch (action.type){
        case 'Add':
            return (action.payload)

        case 'Decrement':
            return state -1
    }
}

export default reducer;