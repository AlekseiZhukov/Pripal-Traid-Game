import React, {useCallback, useEffect, useState} from "react";
import Container from "../Container";
import cn from 'classnames';
import s from './Header.module.scss';
import logoPng from '../assets/logo.png';


const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    const [small, setSmall] = useState(false)

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
                        <img className={s.logo}
                             src={logoPng} alt="Logo"/>
                        <ul className={s.nav}>
                            {MENU.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
                        </ul>
                    </div>

                </Container>
            </div>
        </header>
    )
}

export default Header