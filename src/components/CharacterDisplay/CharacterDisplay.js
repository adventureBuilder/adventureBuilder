// basic character details - Displays (name, xp, class, race, stats) 
// Used by the Story Component and StorySelection Component

import React from 'react';

export default function CharacterDisplay({ character }) {

    return (
        <div className="char-display-container">
            <div className="char-title">
                <h2 className="char-name">{character.character_name}</h2>
                <h3 className="char-class">The&nbsp;{character.class_name}</h3>
            </div>

            <div className="char-sheet">
                {/* <div>
                    <div>Class </div>
                     eliminated race and coins
                    <div>Race: </div>
                    <div>Coin: </div> 
                </div> 
                <div>*/}
                <div>STRENGTH: {character.strength}</div>
                <div>DEXTERITY: {character.dexterity}</div>
                <div>CHARISMA: {character.charisma}</div>
                {/* </div> */}
            </div>

        </div>
    );
}