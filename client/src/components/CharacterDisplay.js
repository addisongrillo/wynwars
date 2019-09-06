import React from 'react'

const CharactersDisplay = props => (
<div className="characters">
    {props.characters.map((character ,i) => (      
        <div key={i} className='categories'>
        {[
            ['name', 'Name'],
            ['homeworld', 'Home World'],  
            ['birth_year', 'Birth Year'],
            ['gender', 'Gender'],
            ['height', 'Height'],
            ['mass', 'Mass'], 
            ['skin_color', 'Skin Color'],
            ['hair_color', 'Hair Color'], 
            ['eye_color', 'Eye Color'],
        ]
        .map(([attr, label]) => <div key={character[attr] + label} className="results">{label}: {character[attr]}</div>)}
            <br/>
        </div>
    ))}
    </div>
)

export default CharactersDisplay