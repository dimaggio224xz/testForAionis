import getServerDatas from '../getServerDatas';

const returnState = () => {
    return {
        type: 'RETURN_STATE'
    }
}

const getAllNotes = (data) => {
    return {
        type: 'GET_ALL_NOTES',
        data
    };
}

const getAllCompletedNotes = (data) => {
    return {
        type: 'GET_ALL_COMPLETED_NOTES',
        data
    };
}



const getAllNotesThunk = () => dispath => {
    return getServerDatas.getAllNotes()
        .then(res=> dispath(getAllNotes(res)))
        .catch(err => dispath(returnState()))
};

const getAllCompletedNotesThunk = () => dispath => {
    return getServerDatas.getAllCompletedNotes()
        .then(res=> dispath(getAllCompletedNotes(res)))
        .catch(err => dispath(returnState()))
};

const completeThunk = (_id) => dispath => {
    return getServerDatas.completeNote(_id)
        .then(res => {
            if(res.msg === 'SAVE'){
                return getServerDatas.getAllNotes()
                    .then(res=> dispath(getAllNotes(res)))
                    .catch(err => dispath(returnState()))
            }
            else {
                return dispath(returnState())
            }
        })
        .catch(err => dispath(returnState()))
}

const unCompleteThunk = (_id) => dispath => {
    return getServerDatas.unCompleteNote(_id)
        .then(res => {
            if(res.msg === 'SAVE'){
                return getServerDatas.getAllCompletedNotes()
                    .then(res=> dispath(getAllCompletedNotes(res)))
                    .catch(err => dispath(returnState()))
            }
            else {
                return dispath(returnState())
            }
        })
        .catch(err => dispath(returnState()))
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllNotes: () => dispatch(getAllNotesThunk()),
        complete: (_id) => dispatch(completeThunk(_id)),

        getAllCompletedNotes: () => dispatch(getAllCompletedNotesThunk()),
        unComplete: (_id) => dispatch(unCompleteThunk(_id)),
    }
}



export default mapDispatchToProps;