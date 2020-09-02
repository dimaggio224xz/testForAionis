import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Nav = () => {

    const [active, setActive] = useState(false);


    const changeGamburgerStyle = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    }

    const gamburgerStyle = active ? 'gamburger active' : 'gamburger';
    const navMenu = active ? 'nav-menu active-menu' : 'nav-menu';

    return (
        <>
        <nav className='nav-bg'>
            <div className='nav'>
                <h1>Заметки</h1>

                <div onClick={()=> changeGamburgerStyle()} className={gamburgerStyle}>
                    <span></span>
                </div>

                <div className={navMenu}>
                    <div className='nav-menu-info'>
                        Меню
                    </div>

                    <Link to='/'>
                        <div onClick={()=> setActive(false)} className='nav-menu-text'>
                            Зметки
                        </div>
                    </Link>

                    <Link to='/create'>
                        <div onClick={()=> setActive(false)} className='nav-menu-text'>
                            Создать заметку
                        </div>
                    </Link>

                    <Link to='executed'>
                        <div onClick={()=> setActive(false)} className='nav-menu-text'>
                            Выполненные заметки
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav;