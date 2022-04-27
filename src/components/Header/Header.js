import React, {useCallback, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Container from "../Container";
import cn from 'classnames';
import s from './Header.module.scss';
import logoPng from '../../assets/logo.png';

const MENU = [{name: "Main Page", href: "/"}, {name: "Characters Page", href: "/characters"}, {name: "About Game Page", href: "/about"}, {name: "Contacts Page", href: "/contacts"}];

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
                            {MENU.map(({name, href}, index) => <li key={index}><Link to={href}>{name}</Link></li>)}
                        </ul>
                    </div>

                </Container>
            </div>
        </header>
    )
}

export default Header