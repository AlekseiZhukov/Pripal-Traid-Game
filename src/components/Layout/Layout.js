import React from 'react';
import {Outlet, useMatch} from 'react-router-dom'
import Header from "../Header";
import Footer from "../Footer";

import s from './Layout.module.scss';

const Layout = () => {
    const match = useMatch("/login")

    if (match) {
        return (
            <div className={s.root} >
                <Outlet />
                <Footer/>
            </div>
        )
    }

    return (
        <div className={s.root} >
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};
                            
export default Layout;