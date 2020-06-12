import React, { useEffect, useState } from 'react'
import CharacterContainer from '../styledComponents/CharacterContainer'
import axios from 'axios'

export default function Character(props) {
    const { name, height, mass, gender, homeWorld } = props
    const [homeWorldName, setHomeWorldName] = useState('')
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true)
    }
    
    useEffect(() => {
        axios.get(homeWorld)
            .then(res => {
                setHomeWorldName(res.data.name)
            })
            .catch(err => {
                setHomeWorldName('unavailable')
            })
    }, [homeWorldName, homeWorld])

    return (
        <CharacterContainer>
            <h2>{name}</h2>
            {  open ?
            <div>
                <p>Height: <span>{height}</span></p>
                <p>Mass: <span>{mass}</span></p>
                <p>Gender: <span>{gender}</span></p>
                <p>Home World: <span>{homeWorldName}</span></p>
            </div>
            : ''
            }
            <button onClick={handleClick}>Expand/Collapse</button>
        </CharacterContainer>
    )
}