import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import mapDispatchToProps from '../actions';


const CreateNote = (props) => {

    const { t } = useTranslation();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const createNote = () => {
        props.createNote(title, text, Date.now())
    }

    let btnDisabled = !title || !text ? true : false;

    return (
        <>
        <div className='container'>
            <div className='create-note'>
                <label>
                    <div>{t('createEdit.title')}</div>
                    <input onChange={e=> setTitle(e.target.value)} value={title}/>
                </label>
                <hr/>
                <label>
                    <div>{t('createEdit.text')}</div>
                    <textarea onChange={e=> setText(e.target.value)} value={text}/>
                </label>
                <hr/>
                <button disabled={btnDisabled} onClick={()=> createNote()} className="btn btn-success">{t('createEdit.save')}</button>
            </div>
        </div>
        </>
    )
}

export default connect( null, mapDispatchToProps )(CreateNote);