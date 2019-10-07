import React from 'react'
import Fetcher from './Fetcher'

const CharactersDisplay = props => (
<div className="characters">
    {props.characters.map((character ,i) => (      
        <div key={character.name} className='categories fadeIn'>
            <div className="results">Name: {character.name}</div>
            <div className="results">Birth Year: {character.birth_year}</div>
            <div className="results">Hair Color: {character.hair_color}</div>
            <div className="results">Mass: {character.mass}</div>
            <Fetcher url={character.homeworld} data="homeworld" label="Home World"/>
            <div className="results">Appeared in Films:</div>
            {character.films.map((film) => (
                <Fetcher url={film} data="films"/>
            ))}
            <br/>
        </div>
    ))}
    </div>
)

export default CharactersDisplay