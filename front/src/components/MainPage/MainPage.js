import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions';
import Spinner from '../Spinner';
import MainPageItem from '../MainPageItem';
import EmptyMSG from '../EmptyMSG';



const MainPage = (props) => {

    useEffect(()=>{
        props.getAllNotes();
    }, [props.notes])


    if (!props.notes) {
        return <Spinner/>
    }
    if (props.notes === 'EMPTY') {
        return <EmptyMSG/>
    }

    let notesArr = props.notes.map(i => <MainPageItem key={i._id} obj={i} />)

    return (
        <>
        <div className='container'>
            {notesArr}
        </div>
        </>
    )
}

const mapStateToProps = (store) => ({notes: store.notes});
export default connect( mapStateToProps, mapDispatchToProps )(MainPage);