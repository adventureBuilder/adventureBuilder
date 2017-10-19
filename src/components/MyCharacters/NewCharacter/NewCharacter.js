// Displays character name input, gender dropdown, class dropdown, stats, starting hp, "cancel" button, and "save" button
// Used by MyCharacters Component

import React, { Component } from 'react';

export default class NewCharacter extends Component {
    constructor() {
        super();
        this.state = {

        }

    }
    // BARB CHA-1 DEX0 STR2
    // BARD CHA2 DEX-1 STR0
    // ROGUE CHA0 DEX2 STR-1

    changeChar(option, value) {
        this.setState({
            option: value
        })
    }
    render() {
        return (
            <div className="new-character">

                <h1>Create A Character</h1>

                <div className="new-character-block">
                    <div className="char-row">
                        <h3>Name: </h3>
                        <input type="text" />
                    </div>
                    <div className="char-row">
                        <h3>Class: </h3>
                        <select className="select-box" name="class" onChange={(e) => this.changeChar(e.target.name, e.target.value)}>
                            <option value="Barbarian">Barbarian</option>
                            <option value="Bard">Bard</option>
                            <option value="Rogue">Rogue</option>
                        </select>
                    </div>

                    <div className="char-row">
                        <h3>Srength(STR)</h3>
                        
                    </div>



                </div>
            </div>
        );
    }
}