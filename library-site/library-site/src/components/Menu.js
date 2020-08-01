import React, { Component } from 'react';

class Menu extends Component {
    state = {
        activeLines: true
    };

    changeClass = () => {
        const lines = document.getElementById('lines')
        console.log('Działa')
        lines.classList.add('active')
        let hide = document.getElementById('hide')
        console.log('Działa')
        hide.classList.add('active')
    }

    removeClass = () => {
        const lines = document.getElementById('lines')
        console.log('Działa')
        lines.classList.remove('active')
        let hide = document.getElementById('hide')
        console.log('Działa')
        hide.classList.remove('active')
    }

    render() {
        return (
            <div onMouseOver={this.changeClass} onMouseOut={this.removeClass} onClick={this.handleClickMenu} className="hamburger" id='menu'>
                <button>Menu</button>
                <div className="lines" id='lines'></div>
                <div className="hide" id="hide"></div>
            </div>)
    }
}

export default Menu;