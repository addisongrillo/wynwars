import React from 'react'
import Fetcher from './Fetcher'

const CharactersDisplay = props => (
<div className="characters">
    {props.characters.map((character ,i) => (      
        <div key={i} className='categories'>
            <div className="results">Name: {character.name}</div>
            <div className="results">Birth_Year: {character.birth_year}</div>
            <Fetcher url={character.homeworld} data="name" label="Home World"/>
            <br/>
        </div>
    ))}
    </div>
)

export default CharactersDisplay