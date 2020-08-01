import React from 'react';
import '../styles/_navigation.sass';
import Menu from '../components/Menu';

const Navigation = () => {
    return (
        <div className="nav" id='nav'>
            <ul>
                <li>Start</li>
                <li>Historia</li>
                <li>Szukaj</li>
                <li>Zaloguj</li>
                <li className="nav__menu">Kontakt</li>
            </ul>
            <div className="nav__corner">
                <div className="hamburger">{<Menu />}

                </div>
            </div>


        </div>

    );
}

export default Navigation;