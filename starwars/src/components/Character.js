import React from 'react'

export default function Character(props) {
    const { name, height, mass } = props

    return (
        <div className='character-container'>
            <h2>{name}</h2>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
        </div>
    )
}