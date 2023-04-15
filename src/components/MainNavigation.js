import React from 'react';
import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {/* <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li> */}

                    <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined } end>Home</NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? classes.active : undefined} end>Products</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation