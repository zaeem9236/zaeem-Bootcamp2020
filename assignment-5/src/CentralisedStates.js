const reducer = (state, action)=>{
    switch (action){
        case 'Increment':
            return state + 1

        case 'Decrement':
            return state -1
    }
}

export default reducer;