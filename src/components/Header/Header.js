import React from "react";
import Container from "../Container";
import s from './Header.module.css';
import logoPng from '../assets/logo.png';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.header}>
                <Container>
                    <div className={s.wrap}>
                        <div className={s.logo} style={{
                            background: `url(${logoPng})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain"
                        }}/>
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