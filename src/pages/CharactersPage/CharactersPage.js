import React, {useState} from 'react';
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";

import s from './CharactersPage.module.scss';

import {CHARACTER} from '../../constants/contentCharacter';

const CharactersPage = () => {

    const [character, setCharacter] = useState(CHARACTER);
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
        <div className={s.root}>
            <section className={s.cardSection}>
                <Container>
                    <div className={s.cardTitle}>
                        <Heading backLine>Marvel Cards</Heading>

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
        </div>
    );
};
                            
export default CharactersPage;