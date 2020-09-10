import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

import mapDispatchToProps from '../actions';


const UpdateNote = (props) => {

    const {id} = useParams();
    const { t } = useTranslation();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    useEffect(()=>{
        props.getEditInfo(id)
    }, [])

    useEffect(()=> {
        if(props.edit) {
            setTitle(props.edit.title)
            setText(props.edit.text)
        }
    }, [props.edit])


    const updateNote = () => {
        
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
                <button disabled={btnDisabled} onClick={()=> updateNote()} className="btn btn-success">{t('createEdit.save')}</button>
            </div>
        </div>
        </>
    )
}


const mapStateToProps = (store) => ({...store});
export default connect( mapStateToProps, mapDispatchToProps )(UpdateNote);