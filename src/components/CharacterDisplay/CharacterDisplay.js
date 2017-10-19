// basic character details - Displays (name, xp, class, race, stats) 
// Used by the Story Component and StorySelection Component

import React from 'react';

export default function CharacterDisplay({ character }) {

    return (
        <div className="characterDisplayContainer">

            <h2>{character.character_name}</h2>
            <h3>The {character.class_name}</h3>
            
            <div className="char-sheet">
               {/* <div>
                    <div>Class </div>
                     eliminated race and coins
                    <div>Race: </div>
                    <div>Coin: </div> 
                </div> 
                <div>*/}
                    <div>STR: {character.strength}</div>
                    <div>DEX: {character.dexterity}</div>
                    <div>CHA: {character.charisma}</div>
                {/* </div> */}
            </div>

        </div>
    );
}
