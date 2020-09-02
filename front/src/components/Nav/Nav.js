import React, { useState } from 'react';

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

    return (
        <>
        <nav className='nav-bg'>
            <div className='container'>
                <div className='nav'>
                    <h1>Заметки</h1>
                    <div onClick={()=> changeGamburgerStyle()} className={gamburgerStyle}>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav;