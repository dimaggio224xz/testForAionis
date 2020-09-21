import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import date from '../../tools/date';
import mapDispatchToProps from '../../redux/actions';


const CompletedNotesItem = (props) => {

    const { t } = useTranslation();

    const data = props.obj ? props.obj : null;


    const makeUnComplete = () => {
        if (props.obj && props.obj._id)
            props.unComplete(props.obj._id)
    }
    const makeDelete = () => {
        if (props.obj && props.obj._id)
        props.deleteNote(props.obj._id)
        
    }

    if (!data) {
        return null;
    }

    return (
        <>
        <div className='main-page-item'>
            <div className='d-flex justify-content-between w-100'>
                <div className='main-page-item-title' > {data.title} </div>
                <div className='main-page-item-date' > {date(data.date)} </div>
            </div>

            <div className='mt-3'>
                <button onClick={()=> makeUnComplete()} className="btn btn-warning">{t('buttons.unComplete')}</button>
                <button onClick={()=> makeDelete()} className="btn btn-danger ml-4">{t('buttons.delete')}</button>
            </div>

            <hr/>

            <div>
                {data.text}
            </div>
        </div>
        </>
    )
}



export default connect( null, mapDispatchToProps )(CompletedNotesItem);