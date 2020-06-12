import React from 'react'
import CharacterContainer from '../styledComponents/CharacterContainer'

export default function Character(props) {
    const { name, height, mass, gender } = props

    return (
        <CharacterContainer>
            <h2>{name}</h2>
            <p>Height: <span>{height}</span></p>
            <p>Mass: <span>{mass}</span></p>
            <p>Gender: <span>{gender}</span></p>
        </CharacterContainer>
    )
}