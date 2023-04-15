import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './Root.module.css'

import MainNavigation from '../components/MainNavigation';

function Root() {
    return (
        <>
            {/* <div>Root Layout</div> */}
            <MainNavigation/>
            <main className={classes.content}>
            <Outlet />
            </main>
        </>
    );
}

export default Root