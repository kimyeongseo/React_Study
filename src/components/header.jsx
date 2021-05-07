import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <>
                <nav className='header'>
                    <i className='header-logo fas fa-heart'></i>
                    <span className="header-title">Habit Tracker</span>
                    <span className="total-habit-count">{this.props.totalCount}</span>
                </nav>

            </>
        );
    }
}

export default Header;