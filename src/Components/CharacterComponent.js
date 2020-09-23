import React from 'react'
import "./CharacterComponent.css";

function CharacterComponent ({character}) {
    return (
        <div className="character">
            <div className='character_image'> 
                <img src={character.image} />
            </div>
            <div className='character_info'>
                <h6 className="character_name">{character.name}</h6>
                <p className='character_designation'>{character.designation}</p>
                <p className="character_description">{character.description}</p>
            </div>
            
        </div>
    )
}

export default CharacterComponent