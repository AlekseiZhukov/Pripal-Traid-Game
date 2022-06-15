import React, {useState} from 'react';
import cn from 'classnames'
import Container from "../../components/Container";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from "../../components/Form";

import s from './Login.module.scss';
import logoImg from '../../assets/logo.png'
import {ReactComponent as PenIcon} from '../../assets/icon-pen.svg'


const Login = () => {

    const [showRegister, setShowRegister] = useState(false)

    const handleLoginFormSubmit = (value) => {
        console.log('handleLoginFormSubmit ', value)
    }

    const handleRegisterFormSubmit = (value) => {
        if (value.password === value.repeat) {
            console.log('handleRegisterFormSubmit', value)
        } else {
            alert('поля не совподают')
        }
    }

    return (
        <div className={s.root}>
            <div className={s.headerLogo}>
                <img src={logoImg} alt="Logo"/>
            </div>
            <Container className={cn(s.container, {[s.active]: showRegister})}>

                <div className={s.card}>
                    <h1 className={s.title}>Login</h1>
                    <Form onSubmit={handleLoginFormSubmit}>
                        <Input type="email" name="email" label="Email"/>
                        <Input type="password" name="password" label="Password"/>
                        <div className={s.buttonContainer}>
                            <Button>Go</Button>
                        </div>
                    </Form>
                </div>
                <div className={cn(s.card, s.alt, {[s.activeForm]: showRegister})}>
                    <div className={cn(s.toggle, {[s.active]: showRegister})} onClick={() => {
                        setShowRegister(true)
                    }}>
                        <PenIcon/>
                    </div>
                    <h1 className={s.title}>Register
                        <div className={s.close} onClick={() => {
                            setShowRegister(false)
                        }}/>
                    </h1>
                    <Form onSubmit={handleRegisterFormSubmit}>
                        <div className={s.inputContainer}>
                            <Input type="email" name="email" label="Email" color="white"/>
                        </div>
                        <div className={s.inputContainer}>
                            <Input type="password" name="password" label="Password" color="white"/>
                        </div>
                        <div className={s.inputContainer}>
                            <Input type="password" name="repeat" label="Repeat Password" color="white"/>
                        </div>
                        <div className={s.buttonContainer}>
                            <Button>Register</Button>
                        </div>
                    </Form>
                </div>
            </Container>

        </div>
    );
};

export default Login;