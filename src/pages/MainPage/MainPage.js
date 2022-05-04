import React, {useState} from 'react';
import Slider from "../../components/Slider";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";
import {useLocation} from "react-router-dom";
import s from './MainPage.module.scss';

import {CHARACTER} from '../../constants/contentCharacter'


const MainPage = () => {

    const [character, setCharacter] = useState(CHARACTER);

    const location = useLocation()

    const handleLikeClick = (id) => {
        setCharacter(prevState => {

            return prevState.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isLike: !item.isLike
                    }
                }

                return item
            });
        });
    };

    return (
        <>
            <Slider/>
            <section className={s.cardSection}>
                <Container>
                    <div className={s.cardTitle}>
                        <Heading backLine>Marvel Cards</Heading>
                        <Heading level={2}>Collect your best five</Heading>
                    </div>
                    <div className={s.cardWrap}>
                        {character.map(item => {
                            return <div key={item.id}>

                                <CharacterCard
                                    id={item.id}
                                    name={item.name}
                                    src={item.thumbnail.path}
                                    humanName={item.humanName}
                                    description={item.description}
                                    isLike={item.isLike}
                                    onLikeClick={handleLikeClick}

                                />
                            </div>
                        })}

                    </div>
                </Container>
            </section>
        </>
    );
};

export default MainPage;