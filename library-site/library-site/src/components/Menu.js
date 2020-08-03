import React, { Component } from 'react';

class Menu extends Component {

    changeClass = () => {
        const lines = document.getElementById('lines')
        lines.classList.add('active')
        let hide = document.getElementById('hide')
        hide.classList.add('active')
    }

    removeClass = () => {
        const lines = document.getElementById('lines')
        lines.classList.remove('active')
        let hide = document.getElementById('hide')
        hide.classList.remove('active')
    }

    // handleClickMenu = () => {
    //     const nav = document.getElementById('nav')
    //     nav.classList.toggle('active')
    // }

    render() {
        return (
            <div onMouseOver={this.changeClass} onMouseOut={this.removeClass} >
                <button>Menu</button>
                <div className="lines" id='lines'></div>
                <div className="hide" id="hide"></div>
            </div>)
    }
}

export default Menu;