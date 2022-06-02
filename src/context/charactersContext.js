import React, {useEffect, useState} from 'react'
import {CHARACTER} from "../constants/contentCharacter";

export const CharactersContext = React.createContext(null)

export const CharactersContextProvider = ({children}) => {
    const [character, setCharacter] = useState(
        () => {
            const arrayLikesCharacters = JSON.parse(localStorage.getItem('likeCharactersStorage'))

            return CHARACTER.map(item => {
                if (arrayLikesCharacters.indexOf(item.id) !== -1) {
                    return {
                        ...item,
                        isLike: true
                    }
                }
                return item
            })
        }
    );

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

    useEffect(() => {
        const likeCharactersIds = character.map(item => item.isLike ? item.id : '')
        localStorage.setItem('likeCharactersStorage', JSON.stringify(likeCharactersIds))
    }, [character])


    return <CharactersContext.Provider value={{
        handleLikeClick,
        character
    }}>
        {children}
    </CharactersContext.Provider>
}
