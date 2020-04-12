import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <NavLink to='/Movies' activeClassName={"activeLink"}><button type="button" className='nav-link'>Movies</button></NavLink>
                <NavLink to='/' activeClassName={"activeLink"}><button type="button" className='nav-link'>TV Shows</button></NavLink>
            </nav>
        )
    }
}
export default inject("MovieStore")(observer(Navigation));
