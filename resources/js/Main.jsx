import React, { useState, useEffect } from 'react';
import Auth from './components/navbar/Auth';
import AuthUser from './components/AuthUser';
import Guest from './components/navbar/Guest';

function Main() {

    const { getToken } = AuthUser();

    if (!getToken()) {
        return <Guest />
    }
    
    return (
        <>
            <Auth />
        </>
    );
}

export default Main;
