import {
    GET_ALL_NOTES,
    GET_ALL_COMPLETED_NOTES,
    GET_EDIT_INFO
} from '../actionTypes'

const initialState = {
    notes: null,
    completedNotes: null,
    edit: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_NOTES:
            return {...state, ...{notes: action.data}};

        case GET_ALL_COMPLETED_NOTES:
            return {...state, ...{completedNotes: action.data}};

        case GET_EDIT_INFO:
            return {...state, ...{edit: action.data}};

        default:
            return state;
    }
    
}



export default reducer;