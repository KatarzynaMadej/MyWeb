import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/_navigation.sass';
import Menu from '../components/Menu';

const list = [
    { name: "start", path: "/", exact: true },
    { name: "historia", path: "/history" },
    { name: "szukaj", path: "/search" },
    { name: "zaloguj", path: "/logpage" },
    { name: "kontakt", path: "/contact" },
]

class Navigation extends React.Component {

    state = {
        value: false
    }

    handleClickMenu = () => {
        const nav = document.getElementById('nav')
        nav.classList.toggle('active')
        this.setState({
            value: !this.value
        })
    }

    render() {

        const menu = list.map(item => (
            <li key={item.name} onClick={this.handleClickMenu}>
                <NavLink
                    to={item.path} exact={item.exact ? item.exact : false}>{item.name}
                </NavLink>
            </li>
        ))


        return (
            <div>
                <div className='navigation'>
                    <div className="nav" id="nav">
                        <ul>
                            {menu}
                        </ul>
                    </div>
                    <div className="nav__corner"></div>

                </div>
                <div className="hamburger" onClick={this.handleClickMenu} id='nav'>{<Menu value={this.setState.value} />}
                </div>

            </div>
        );
    }
}
export default Navigation;