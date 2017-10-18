// basic character details - Displays (name, xp, class, race, stats) 
// Used by the Story Component and StorySelection Component

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CharacterDisplay extends Component {
    render () {
        return (
            <div className="characterDisplayContainer">
                <div>
                <div>CharName</div>
                <div>HP:9</div>
                </div>
                <div>
                <div>
                <div>ClassName</div>
                <div>Coin:200</div>
                </div>
                {/* Put into their own div so we can use flex column to line them up later */}
                <div>STR:</div>
                <div>DEX:</div>
                <div>CHA:</div>
                </div>
                <div>
                   
                    

                    </div>

            </div>
        );
    }
}