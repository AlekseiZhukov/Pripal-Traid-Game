import React, {useState} from 'react';
import cn from 'classnames'
import Container from "../../components/Container";
import Input from "../../components/Input";

import s from './Login.module.scss';
import logoImg from '../../assets/logo.png'
import {ReactComponent as PenIcon} from '../../assets/icon-pen.svg'
import Button from "../../components/Button";
                            
const Login = () => {

    const [showRegister, setShowRegister] = useState(false)
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        repeat: ''
    })

    const handleChangeLogin = (e) => {

        setLoginData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
            })
        )
    }
    const handleChangeRegister = (e) => {
        
        setRegisterData(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }
    const handleLoginFormSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)
        setLoginData({
            email: '',
            password: ''
        })
    }
    const handleRegisterFormSubmit = (e) => {
        e.preventDefault()
        if(registerData.password === registerData.repeat) {
            setRegisterData({
                email: '',
                password: '',
                repeat: ''
            })
        } else {
            alert('поля не совподают')
        }

        console.log(registerData)

    }


    return (
        <div className={s.root}>
            <div className={s.headerLogo}>
                <img src={logoImg} alt="Logo" />
            </div>
            <Container className={cn(s.container, {[s.active]:showRegister})}>

                <div className={s.card}>
                    <h1 className={s.title}>Login</h1>
                    <form onSubmit={handleLoginFormSubmit}>
                        <Input type="email" id="#email"  name="email" label="Email" value={loginData.email} handleChange={handleChangeLogin}/>
                        <Input type="password" id="#password" name="password" label="Password" value={loginData.password} handleChange={handleChangeLogin}/>
                        <div className={s.buttonContainer}>
                            <Button>Go</Button>
                        </div>
                    </form>
                </div>
                <div className={cn(s.card, s.alt, {[s.activeForm]: showRegister})} >
                    <div className={cn(s.toggle, {[s.active]: showRegister} )} onClick={() => {setShowRegister(true)}}>
                        <PenIcon />
                    </div>
                    <h1 className={s.title}>Register
                        <div className={s.close} onClick={() => {setShowRegister(false)}}/>
                    </h1>
                    <form onSubmit={handleRegisterFormSubmit}>
                        <div className={s.inputContainer}>
                            <Input type="email" id="#signup-email" name="email" label="Email"  color="white" value={registerData.email} handleChange={handleChangeRegister}/>
                        </div>
                        <div className={s.inputContainer}>
                            <Input type="password" id="#signup-password" name="password" label="Password"  color="white" value={registerData.password} handleChange={handleChangeRegister}/>
                        </div>
                        <div className={s.inputContainer}>
                            <Input type="password" id="#signup-repeat-password" name="repeat" label="Repeat Password"  color="white" value={registerData.repeat} handleChange={handleChangeRegister}/>
                        </div>
                        <div className={s.buttonContainer}>
                            <Button>Register</Button>
                        </div>
                    </form>
                </div>
            </Container>

        </div>
    );
};
                            
export default Login;