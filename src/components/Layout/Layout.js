import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import Header from "../Header";
import Footer from "../Footer";
import s from './Layout.module.scss';
                            
const Layout = () => {


    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    },[pathname])

    return (
        <div className={s.root} >
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};
                            
export default Layout;