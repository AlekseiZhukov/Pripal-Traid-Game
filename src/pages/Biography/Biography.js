import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams, Navigate, Link, useLocation} from "react-router-dom";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Container from "../../components/Container";
import Button from "../../components/Button";
import {ReactComponent as LinkIcon} from '../../assets/link_icon.svg'
import s from './Biography.module.scss'

import {BIO} from '../../constants/contentBiography'

const Biography = () => {

    const [data, setData] = useState([])

    const {id} = useParams();
    const navigate = useNavigate();
    const {hash} = useLocation()

    const handleGoBackClick = () => {
        navigate(-1)
    }

    useEffect(() => {
        setData(BIO[id])
    }, [id])

    const handleScroll = useCallback(() => {
        const el = hash && document.getElementById(hash.substr(1))
        el && el.scrollIntoView({block: 'center', behavior: "smooth"})
    }, [hash])

    useEffect(() => {
        window.addEventListener('load', handleScroll)
        return () => {
            window.removeEventListener('load', handleScroll)
        }

    }, [handleScroll])


    if (!data) {
        return <Navigate to="/characters" replace/>
    }

    return (

        <div className={s.root}>
            <Container>
                <div>
                    <Button
                        color="black"
                        onHandleClick={handleGoBackClick}
                    >
                        Go Back
                    </Button>
                </div>

                {
                    data.map((item, index) => {
                        switch (item.type) {
                            case "h1":
                                return (
                                    <Heading level={1} key={index}>{item.text}</Heading>
                                )

                            case "h2":
                                const hashHref = item.text.split(/,\s|\s/).join('_')
                                return (
                                    <Heading className={s.header} level={2} key={index}>
                                        <Link id={hashHref} to={{hash: `#${hashHref}`}}>
                                            {item.text}
                                            <LinkIcon/>
                                        </Link>
                                    </Heading>
                                )

                            case "paragraph":
                                return (
                                    <Text element="p" key={index}>{item.text}</Text>
                                )

                            case "img":
                                return (
                                    <div className={s.imgWrap} key={index}><img src={item.src} alt="sam img"/></div>
                                )

                            default:
                                return (
                                    <Text element="p" key={index}>{item.text}</Text>
                                )
                        }
                    })

                }
            </Container>
        </div>
    )
};

Biography.propTypes = {};

export default Biography;


