import getServerDatas from '../../tools/getServerDatas';
import {
    RETURN_STATE,
    GET_ALL_NOTES,
    GET_ALL_COMPLETED_NOTES,
    GET_EDIT_INFO
} from '../actionTypes'



const returnState = () => {
    return {
        type: RETURN_STATE
    }
}

const getAllNotes = (data) => {
    return {
        type: GET_ALL_NOTES,
        data
    };
}

const getAllCompletedNotes = (data) => {
    return {
        type: GET_ALL_COMPLETED_NOTES,
        data
    };
}

const getEditInfo = (data) => {
    return {
        type: GET_EDIT_INFO,
        data
    };
}




const getAllNotesThunk = () => dispatch => {
    return getServerDatas.getAllNotes()
        .then(res=> dispatch(getAllNotes(res)))
        .catch(err => dispatch(returnState()))
};

const getAllCompletedNotesThunk = () => dispatch => {
    return getServerDatas.getAllCompletedNotes()
        .then(res=> dispatch(getAllCompletedNotes(res)))
        .catch(err => dispatch(returnState()))
};

const completeThunk = (_id) => dispatch => {
    return getServerDatas.completeNote(_id)
        .then(res => {
            if(res.msg && res.msg === 'SAVE'){
                return getServerDatas.getAllNotes()
                    .then(res=> dispatch(getAllNotes(res)))
                    .catch(err => dispatch(returnState()))
            }
            else {
                return dispatch(returnState());
            }
        })
        .catch(err => dispatch(returnState()));
}

const unCompleteThunk = (_id) => dispatch => {
    return getServerDatas.unCompleteNote(_id)
        .then(res => {
            if(res.msg && res.msg === 'SAVE'){
                return getServerDatas.getAllCompletedNotes()
                    .then(res=> dispatch(getAllCompletedNotes(res)))
                    .catch(err => dispatch(returnState()))
            }
            else {
                return dispatch(returnState());
            }
        })
        .catch(err => dispatch(returnState()));
}

const deleteNoteThunk = (_id) => dispatch => {
    return getServerDatas.deleteNote(_id)
        .then(res => {
            if(res.msg && res.msg === 'DELETED'){
                return getServerDatas.getAllCompletedNotes()
                    .then(res=> dispatch(getAllCompletedNotes(res)))
                    .catch(err => dispatch(returnState()))
            }
            else {
                return dispatch(returnState());
            }
        })
        .catch(err => dispatch(returnState()));
}

const createNoteThunk = (title, text, date) => dispatch => {
    return getServerDatas.createNote(title, text, date)
    .then(res=>{
        if (res.msg && res.msg === 'SAVE') {
            window.location = '/';
            return dispatch(returnState());
        }
        else {
            return dispatch(returnState());
        }
    })
    .catch(err => dispatch(returnState()));
}


const getEditInfoThunk = (_id) => dispatch => {
    return getServerDatas.getNoteById(_id)
    .then(res=>{
        if (res.msg) {
            return dispatch(returnState());
        }
        else {
            return dispatch(getEditInfo(res));
        }
    })
    .catch(err => dispatch(returnState()));
}

const updateNoteThunk = (_id, title, text) => dispatch => {
    return getServerDatas.updateNote(_id, title, text)
    .then(res=>{
        if (res.msg && res.msg === 'SAVE') {
            window.location = '/';
            return dispatch(returnState());
        }
        else {
            return dispatch(returnState());
        }
    })
    .catch(err => dispatch(returnState()));
}














const mapDispatchToProps = (dispatch) => {
    return {
        getAllNotes: () => dispatch(getAllNotesThunk()),
        complete: (_id) => dispatch(completeThunk(_id)),

        getAllCompletedNotes: () => dispatch(getAllCompletedNotesThunk()),
        unComplete: (_id) => dispatch(unCompleteThunk(_id)),

        createNote: (title, text, date) => dispatch(createNoteThunk(title, text, date)),

        updateNote: (_id, title, text) => dispatch(updateNoteThunk(_id, title, text)),

        getEditInfo: (_id) => dispatch(getEditInfoThunk(_id)),

        deleteNote: (_id) => dispatch(deleteNoteThunk(_id))
    }
}



export default mapDispatchToProps;