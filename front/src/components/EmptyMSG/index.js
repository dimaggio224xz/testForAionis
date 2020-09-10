import React from 'react';
import { useTranslation } from 'react-i18next';

const EmptyMsg = () => {
    const { t } = useTranslation();
    return (
        <>
        <div className='empty-message'>
            {t('emptyMSG')}
        </div>
        </>
    )
}
export default EmptyMsg;