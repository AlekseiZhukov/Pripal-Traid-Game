import s from './Footer.module.scss'
import Container from "../Container";
import React from "react";

const Footer = () => {
    return(
        <footer className={s.root}>
            <Container>
                <div className={s.footerWrap}>
                    Coded with
                    <span className={s.heart} />
                    by You
                </div>
            </Container>
        </footer>
    )
}

export default Footer