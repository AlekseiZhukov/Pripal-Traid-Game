import React from 'react';
import { Outlet } from 'react-router-dom'

const LayoutBio = () => {
    return (
        <div >
            <Outlet />
        </div>
    );
};

export default LayoutBio;