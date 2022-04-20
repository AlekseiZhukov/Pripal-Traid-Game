import React, {useEffect, useState} from 'react';
import s from './Biography.module.css'
import {BIO} from './contentBiography'
import Heading from "../../Heading";
import Button from "../../Button";
import Text from "../../Text";
import Container from "../../Container";

const Biography = ({id, onBackClick}) => {
    const [data, setData] = useState([])
    const handleClick = () => {
        onBackClick(null)
    }


    useEffect(() => {
        setData(BIO[id])
    }, [id])


    return (
        <Container>
            <Button name="Go Back" black onHandleClick={handleClick}/>
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    {item.type === 'h1' ? <Heading level={1}>{item.text}</Heading> : null}
                    {item.type === 'h2' ? <Heading level={2}>{item.text}</Heading> : null}
                    {item.type === 'paragraph' ? <Text element={"p"}>{item.text}</Text> : null}
                    {item.type === 'img' ? <img src={item.src} alt="img" className={s.img}/> : null}

                </React.Fragment>
            ))}

        </Container>
    );
};

export default Biography;