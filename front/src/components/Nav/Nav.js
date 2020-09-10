import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Nav = () => {

    const [active, setActive] = useState(false);
    const { t, i18n } = useTranslation();


    const changeGamburgerStyle = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    }

    const changeOnEn = () => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en');
        }
    }
    const changeOnRu = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ru');
        }
    }

    const gamburgerStyle = active ? 'gamburger active' : 'gamburger';
    const navMenu = active ? 'nav-menu active-menu' : 'nav-menu';

    let enBtn, ruBtn;
    if (i18n.language === 'en') {
        enBtn = 'btn btn-primary';
        ruBtn = 'btn btn-outline-primary';
    } else {
        enBtn = 'btn btn-outline-primary';
        ruBtn = 'btn btn-primary';
    }


    return (
        <>
        <nav className='nav-bg'>
            <div className='nav'>
                <h1>{t('navTitle')}</h1>

                <div onClick={()=> changeGamburgerStyle()} className={gamburgerStyle}>
                    <span></span>
                </div>

                <div className='nav-leng'>
                    <button onClick={changeOnEn} className={enBtn}>En</button>
                    <button onClick={changeOnRu} className={ruBtn}>Ru</button>
                </div>

                <div className={navMenu}>
                    <div className='nav-menu-info'>
                        {t('menu.menu')}
                    </div>

                    <Link to='/'>
                        <div onClick={()=> setActive(false)} className='nav-menu-text'>
                            {t('menu.notes')}
                        </div>
                    </Link>

                    <Link to='/create'>
                        <div onClick={()=> setActive(false)} className='nav-menu-text'>
                            {t('menu.create')}
                        </div>
                    </Link>

                    <Link to='/completed'>
                        <div onClick={()=> setActive(false)} className='nav-menu-text'>
                            {t('menu.completed')}
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav;