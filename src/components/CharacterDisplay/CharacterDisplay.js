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

                <div className="char-sheet">

                    {/* <div>
                    <div>Class </div>
                     eliminated race and coins
                    <div>Race: </div>
                    <div>Coin: </div> 
                </div> 
                <div>*/}
                <div className="fadingpower">STRENGTH: {character.strength}</div>
                <div className="fadingpower">DEXTERITY: {character.dexterity}</div>
                <div className="fadingpower">CHARISMA: {character.charisma}</div>
                 </div> 

                    <div className="fadingpower">STRENGTH: {character.strength}</div>
                    <div className="fadingpower">DEXTERITY: {character.dexterity}</div>
                    <div className="fadingpower">CHARISMA: {character.charisma}</div>
                </div>

            </div>

        </div>

                    </div>
                


            
    

    );
}