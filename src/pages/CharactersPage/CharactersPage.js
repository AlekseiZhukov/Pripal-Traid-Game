import React, {useContext} from 'react';
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";

import s from './CharactersPage.module.scss';
import {CharactersContext} from "../../context/charactersContext";


const CharactersPage = () => {
    const {character, handleLikeClick} = useContext(CharactersContext)

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