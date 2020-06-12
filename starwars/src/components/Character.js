import React from 'react'
import CharacterContainer from '../styledComponents/CharacterContainer'

export default function Character(props) {
    const { name, height, mass, gender } = props

    return (
        <CharacterContainer>
            <h2>{name}</h2>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Gender: {gender}</p>
        </CharacterContainer>
    )
}