import React from 'react';
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

import s from './ContactsPage.module.scss';

import photo from '../../assets/ava.jpg'

const ContactsPage = () => {
    return (
        <div className={s.root}>
            <Container className={s.wrapper}>
                <div className={s.imgWrap}>
                    <img src={photo} alt="фото"/>
                </div>
                <div className={s.contacts}>
                    <Heading level={1}>Frontend разработчик</Heading>

                    <Text element={"div"}> mail: <Text element={"span"} italic>alex__zhukov@mail.ru</Text></Text>
                    <Text element={"div"}>TG: <Text element={"span"} italic>@AZhukoff</Text></Text>
                    <Text element={"div"}>github: <Text element={"span"} italic>github.com/AlekseiZhukov</Text></Text>
                    <Text element={"div"}>phone: <Text element={"span"} italic>+7 (904) 394 29 59</Text></Text>
                    <Heading className={s.subtitle} level={4}> Краткое резюме: </Heading>
                    <Text element={"div"}>Разработчик с 2+ годами опыта разработки SPA приложений с использованием
                        JavaScript-библиотеки React.
                        Имею опыт работы с пакетом графических программ Corel.</Text>
                    <Text element={"div"} strong>Навыки:
                        JavaScript (ES6+), ReactJS, Redux, React-redux, CSS-Modules,
                        Webpack, NodeJS, Git </Text>
                </div>

            </Container>
        </div>
    );
};

export default ContactsPage;