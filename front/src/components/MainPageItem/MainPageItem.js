import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import date from '../date';
import mapDispatchToProps from '../actions';



const MainPageItem = (props) => {

    const { t } = useTranslation();

    const data = props.obj ? props.obj : null;

    if (!data) {
        return null;
    }

    const makeComplete = () => {
        if (props.obj && props.obj._id)
            props.complete(props.obj._id)
    }
    const makeEdit = () => {
        
    }

    return (
        <>
        <div className='main-page-item'>
            <div className='d-flex justify-content-between w-100'>
                <div className='main-page-item-title' > {data.title} </div>
                <div className='main-page-item-date' > {date(data.date)} </div>
            </div>

            <div className='mt-3'>
                <button onClick={()=> makeComplete()} className="btn btn-success">{t('buttons.complete')}</button>
                <button onClick={()=> makeEdit()} className="btn btn-primary ml-4">{t('buttons.edit')}</button>
            </div>

            <hr/>

            <div>
                {data.text}
            </div>
        </div>
        </>
    )
}

export default connect( null, mapDispatchToProps )(MainPageItem);