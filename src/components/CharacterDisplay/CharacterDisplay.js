// basic character details - Displays (name, xp, class, race, stats) 
// Used by the Story Component and StorySelection Component

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {getSelectedCharacter} from './../../ducks/reducer';
import {connect} from 'react-redux';

class CharacterDisplay extends Component {
    constructor(props){
        super(props);
        this.state ={
                character: this.props.selectedCharacter
        }
    }

    componentDidMount (){
      
       


    }
    render () {
        return (
            <div className="characterDisplayContainer">
                <div>
                <div>CharName{this.props.selectedCharacter.characterName}</div>
                
                </div>
                
                <div>
                <div>
                <div>ClassName{this.props.selectedCharacter.className}</div>
                
                </div>
                {/* Put into their own div so we can use flex column to line them up later */}
                <div>STR:{this.props.selectedCharacter.strength}</div>
                <div>DEX:{this.props.selectedCharacter.dexterity}</div>
                <div>CHA:{this.props.selectedCharacter.charisma}</div>
                </div>
                <div>
                   
                    

                    </div>

            </div>
        );
    }
}

function mapStateToProps(state){
return {
    selectedCharacter : state.selectedCharacter

}

}

export default connect(mapStateToProps)(CharacterDisplay)