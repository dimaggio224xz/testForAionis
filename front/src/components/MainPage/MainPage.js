import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions';
import Spinner from '../Spinner';

const mapStateToProps = (store) => ({...store});

const MainPage = (props) => {

    useEffect(()=>{
        props.getAllNotes();
    }, [props.notes])


    if (!props.notes) {
        return (
            <div className='d-flex justify-content-center mt-5'>
                <Spinner/>
            </div>
        )
    }


    return (
        <>
        <div className='container'>
            
        </div>
        </>
    )
}

export default connect( mapStateToProps, mapDispatchToProps )(MainPage);