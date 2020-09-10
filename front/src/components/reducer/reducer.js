const initialState = {
    notes: null,
    completedNotes: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_NOTES':
            return {...state, ...{notes: action.data}};

        case 'GET_ALL_COMPLETED_NOTES':
            return {...state, ...{completedNotes: action.data}};

        default:
            return state;
    }
    
}



export default reducer;