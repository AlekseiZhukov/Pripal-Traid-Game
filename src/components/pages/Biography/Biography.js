import React, {useEffect, useState} from 'react';
import s from './Biography.module.css'
import {BIO} from './contentBiography'
import Heading from "../../Heading";
import Button from "../../Button";
import Text from "../../Text";
import Container from "../../Container";
import PropType from "prop-types";


const Biography = ({id, onBackClick}) => {
    const [data, setData] = useState([])
    const handleClick = () => {
        onBackClick && onBackClick(null)
    }


    useEffect(() => {
        setData(BIO[id])
    }, [id])


    return <div className={s.root}>
        <Container>
            <div className={s.btnWrap}>
                <Button color='black' onHandleClick={handleClick}>Go Back</Button>
            </div>
            {
                data.map((item, index) => <div key={index}>
                {item.type === 'h1' && <Heading level={1}>{item.text}</Heading>}
                {item.type === 'h2' && <Heading level={2}>{item.text}</Heading>}
                {item.type === 'paragraph' && <Text element="p">{item.text}</Text>}
                {item.type === 'img' && <div className={s.imgWrap}><img src={item.src} alt="sam img"/></div>}
            </div>)
            }
         </Container>
    </div>};

Biography.propTypes = {
    id: PropType.number,
    onBackClick: PropType.func,
};

export default Biography;