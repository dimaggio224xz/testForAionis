import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EmptyMSG from '../EmptyMSG';
import mapDispatchToProps from '../actions';
import Spinner from '../Spinner';
import CompletedNotesItem from '../CompletedNotesItem';


const CompletedNotes = (props) => {

    useEffect(()=>{
        props.getAllCompletedNotes()
    }, [props.completedNotes])



    if (!props.completedNotes) {
        return <Spinner/>
    }
    if (props.completedNotes === 'EMPTY') {
        return <EmptyMSG/>
    }

    let notesArr = props.completedNotes.map(i => <CompletedNotesItem key={i._id} obj={i} />)

    return (
        <>
        <div className='container'>
            {notesArr}
        </div>
        </>
    )
}

const mapStateToProps = (store) => ({completedNotes: store.completedNotes});
export default connect( mapStateToProps, mapDispatchToProps )(CompletedNotes);