import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Container from "../../components/Container";

import s from './Biography.module.css'

import {BIO} from '../../constants/contentBiography'

const Biography = () => {

    const [data, setData] = useState([])
    const {id} = useParams();


    useEffect(() => {
        setData(BIO[id])
    }, [id])

    return (

        <div className={s.root}>
            <Container>

                {
                    data.map((item, index) => (
                            <div key={index}>
                                {item.type === 'h1' && <Heading level={1}>{item.text}</Heading>}
                                {item.type === 'h2' && <Heading level={2}>{item.text}</Heading>}
                                {item.type === 'paragraph' && <Text element="p">{item.text}</Text>}
                                {item.type === 'img' &&
                                <div className={s.imgWrap}><img src={item.src} alt="sam img"/></div>}
                            </div>
                        )
                    )
                }
            </Container>
        </div>

    )
};

Biography.propTypes = {};

export default Biography;