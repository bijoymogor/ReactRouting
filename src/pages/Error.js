import React from 'react';
import MainNavigation from '../components/MainNavigation';

function Error() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error has occured!</h1>
                <p>Could not find page</p>
            </main>
        </>
    )
}

export default Error