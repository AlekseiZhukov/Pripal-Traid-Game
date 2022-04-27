import React from 'react';
import Container from "../../components/Container";
import Text from "../../components/Text";
import Heading from "../../components/Heading";

import s from './AboutGamePage.module.scss';

import {ABOUT} from "../../constants/contentAbout";


const AboutGamePage = () => {

    return (
        <div className={s.root}>
            <Container>
                <div className={s.title}>
                    <Heading level={1}>About Game</Heading>
                </div>

                {ABOUT.map((item, index) => (
                    <Text element={"p"} key={index}>{item}</Text>
                ))}
            </Container>
        </div>
    )
};

export default AboutGamePage;