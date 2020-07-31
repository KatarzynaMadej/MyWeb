import React from 'react';
import '../styles/_navigation.sass'

const Navigation = () => {
    return (
        <div className="nav">
            <ul>
                <li>Start</li>
                <li>Aktualności</li>
                <li>Szukaj</li>
                <li>Zaloguj</li>
                <li className="nav__menu">Menu</li>
            </ul>
            <div className="nav__corner">
                <div className="hamburger">
                    <button>MENU</button>
                    <div className="lines"></div>
                </div>
            </div>


        </div>

    );
}

export default Navigation;