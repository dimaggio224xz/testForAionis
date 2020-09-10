const initialState = {
    notes: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_NOTES':
            return {notes: action.data};

        default:
            return state;
    }
    
}



export default reducer;