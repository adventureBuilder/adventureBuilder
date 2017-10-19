// basic character details - Displays (name, xp, class, race, stats) 
// Used by the Story Component and StorySelection Component

import React, { Component } from 'react';

export default function CharacterDisplay({character}) {
    console.log(character);
        return (
            <div className="characterDisplayContainer">
                <div>
                <div>Character Name:{character.character_name}</div>
                
                </div>
                
                <div>
                <div>
                <div>Class {character.class_name}</div>
                
                </div>
                {/* Put into their own div so we can use flex column to line them up later */}
                <div>STR: {character.strength}</div>
                <div>DEX: {character.dexterity}</div>
                <div>CHA: {character.charisma}</div>
                </div>
                <div>
                   
                    

                    </div>

            </div>
        );
}
