import React from 'react'
import PageSelectorContainer from '../styledComponents/PageSelectorContainer'

export default function PageSelector(props) {
    const { setPage, page, charactersData } = props

    const handleClick = direction => {
        if (direction === 'next' && charactersData.next) {
            setPage(page + 1)
        }else if (direction === 'previous' && charactersData.previous) {
            setPage(page - 1)
        }
    }

    return (
        <PageSelectorContainer>
            {charactersData.previous ? <button onClick={() => handleClick('previous')}>Previous</button> : ''}
            <h3>Page {page}</h3>
            {charactersData.next ? <button onClick={() => handleClick('next')}>Next</button> : ''}
        </PageSelectorContainer>
    )
}