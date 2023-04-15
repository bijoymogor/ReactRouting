import React from 'react';
import { Outlet } from 'react-router-dom';


import MainNavigation from '../components/MainNavigation';

function Root() {
    return (
        <>
            {/* <div>Root Layout</div> */}
            <MainNavigation/>
            <main>
            <Outlet />
            </main>
        </>
    );
}

export default Root