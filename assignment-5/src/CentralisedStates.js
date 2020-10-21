const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1

        case 'Decrement':
            return state - 1

        default:
            throw new Error()
    }
}

export default reducer;