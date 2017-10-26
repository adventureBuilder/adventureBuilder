// basic character details - Displays (name, xp, class, race, stats) 
// Used by the Story Component and StorySelection Component

import React from 'react';

export default function CharacterDisplay({ character }) {

    return (
        <div className={`char-name char-display-container`}>

            <div className="block-card">
                <div className="sub-title char-title">
                    <h2 className="char-name fadingpower">{character.character_name}</h2>
                    <h3 className="char-class fadingpower">The&nbsp;{character.class_name}</h3>
                </div>
                <div className="block-card-inner">

                    <div className="char-sheet">
                        <h3 className="char-hp fadingpower"><div id="heart"></div><div className="stat-num">{character.health_points}</div></h3>
                        <h4 className="fadingpower stat-name">STRENGTH <div className="stat-num">{character.strength}</div></h4>
                        <h4 className="fadingpower stat-name">DEXTERITY <div className="stat-num">{character.dexterity}</div></h4>
                        <h4 className="fadingpower stat-name">CHARISMA <div className="stat-num">{character.charisma}</div></h4>

                    </div>
                </div>


            </div>
        </div>
    );
}