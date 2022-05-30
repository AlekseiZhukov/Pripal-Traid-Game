import React, {useCallback, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Container from "../Container";
import cn from 'classnames';
import s from './Header.module.scss';
import logoPng from '../../assets/logo.png';

const MENU = [{name: "Main", href: "/"}, {name: "Characters", href: "/characters"}, {name: "About", href: "/about"}, {name: "Contacts", href: "/contacts"}];

const Header = () => {
    const [small, setSmall] = useState(false)
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/')
    }

    const handleScrollY = useCallback(e => {
        if (window.scrollY > 60) {
            setSmall(true)
        } else {
            setSmall(false)
        }

    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollY)
        return () => {
            window.removeEventListener('scroll', handleScrollY)
        }
    }, [handleScrollY])

    return (
        <header className={s.root}>
            <div className={cn(s.header, {[s.small]: small})}>
                <Container>
                    <div className={s.wrap}>
                        <div className={s.logo} onClick={handleLogoClick}>
                            <img src={logoPng} alt="Logo"/>
                        </div>
                        <ul className={s.nav}>
                            {MENU.map(({name, href}, index) =>(
                                <li key={index}>
                                    <NavLink
                                        to={href}
                                        className={({isActive})=> {
                                            return isActive ? s.active : null
                                        }}
                                    >
                                    {name}
                                    </NavLink>
                                </li>
                            ) )}
                        </ul>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header