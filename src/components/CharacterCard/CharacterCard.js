import React from 'react';
import s from './CharacterCard.module.scss'
import PropType from 'prop-types';
import cn from 'classnames';
import Heading from "../Heading";
import Text from "../Text";

import {ReactComponent as Like} from './assets/heart.svg';


const CharacterCard = ({
                           id,
                           name,
                           src,
                           humanName,
                           description,
                           isLike,
                           onLikeClick,
                           onReadBioClick,
                       }) => {

    const handleClick = () => {
        onLikeClick && onLikeClick(id)
    };
    const handleReadBioClick = () => {
        onReadBioClick && onReadBioClick(id)
    }

    return (
        <div className={s.root}>
            <img src={src} alt={name} className={s.cardImage}/>
            <div className={s.cardDetails}>
                <Heading level={2} className={s.cardName}>
                    {name}
                </Heading>
                <Heading level={4} className={s.cardHumanName}>
                    {humanName}
                </Heading>
                <Text className={s.cardDescription}>
                    {description}
                </Text>
                <div className={s.cardMeta}>
                    <div
                        onClick={handleClick}
                        className={cn(s.like, {
                            [s.active]: isLike
                        })}>
                        <Like/>
                    </div>
                    <div className={s.readBio}>
                        <a href="#" onClick={handleReadBioClick}>Read bio</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

CharacterCard.defaultProps = {
    isLike: false
};

CharacterCard.propTypes = {
    id: PropType.number,
    name: PropType.string,
    src: PropType.string,
    humanName: PropType.string,
    description: PropType.string,
    isLike: PropType.bool,
    onLikeClick: PropType.func,
    onReadBioClick: PropType.func,
};

export default CharacterCard;