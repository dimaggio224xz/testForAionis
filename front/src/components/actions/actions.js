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



const getAllNotesThunk = () => dispath => {
    return getServerDatas.getAllNotes()
        .then(res=> dispath(getAllNotes(res)))
        .catch(err => dispath(returnState()))
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllNotes: () => dispatch(getAllNotesThunk())
    }
}



export default mapDispatchToProps;