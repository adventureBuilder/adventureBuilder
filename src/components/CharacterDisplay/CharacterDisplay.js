// basic character details - Displays (name, xp, class, race, stats) 
// Used by the Story Component and StorySelection Component

import React from 'react';

import heartIcon from '../../images/ab-heart-icon.svg';
import skullIcon from '../../images/ab-skull-icon.svg';

export default function CharacterDisplay({ character, life }) {

    let lifeStatus = '';
    if (life === 'dead'){
        lifeStatus = skullIcon;
    } else {
        lifeStatus = heartIcon;
    };

    return (
        <div className={`char-name char-display-container`}>

            <div className="block-card">
                <div className="sub-title char-title">
                    <h2 className="char-name fadingpower">{character.character_name}</h2>
                    <div>
                        <img className="class-icon" src={character.class_icon} alt="character.class_id" />
                        <h3 className="char-class fadingpower">The&nbsp;{character.class_name}</h3>
                    </div>
                </div>
                <div className="block-card-inner">

                    <div className="char-sheet">
                        <h4 className="char-hp fadingpower"><img className="life-icon" src={lifeStatus} alt="life-icon" /><div className="stat-num">{character.health_points}</div></h4>
                        <h4 className="fadingpower stat-name">STRENGTH <div className="stat-num">{character.strength}</div></h4>
                        <h4 className="fadingpower stat-name">DEXTERITY <div className="stat-num">{character.dexterity}</div></h4>
                        <h4 className="fadingpower stat-name">CHARISMA <div className="stat-num">{character.charisma}</div></h4>

                </div>

            </div>

        </div>

                    </div>
                


            
    

    );
}