// Displays user name, "abandon story" Button, story name, Encounter Component, and CharacterDisplay Component

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import Encounter from './Encounter/Encounter'
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';

class Story extends Component {
    constructor(props){
        super(props);
        this.state ={
            story: {},
            storyId: props.match.params.id,
            currentEncounter: {}
        }
        this.setEncounter = this.setEncounter.bind(this);
    }
    componentDidMount(){
        axios.get(`/api/story/${this.state.storyId}`).then(resp=>{
            let startEncounterId = resp.data.start_encounter_id;
            let story = resp.data;
            this.setState({story: resp.data});
            this.setEncounter(startEncounterId);
        });
        
    }

    setEncounter(encounterId){
        axios.get(`/api/getEncounters/${encounterId}`).then(resp =>{
            this.setState({currentEncounter: resp.data});
        })
    }

    render () {
        let tempChar = { "character_id": 1, "character_name": "HarrisonFord", "gender": "female", "dexterity": 1, "strength": 2, "charisma": 6, "health_points": 19, "alive": 1, "class_id": 1, "user_id": 1, "class_name": "test", "base_dexterity": 0, "base_strength": 0, "base_charisma": 5, "male_class_img": "http://placekitten.com/234/232", "female_class_img": "http://placekitten.com/234/232", "start_health_points": 18 };
        return (
            <div>
                Story
                {this.state.story.story_name}
                <Encounter setEncounter={this.setEncounter} encounter={this.state.currentEncounter} />
                <CharacterDisplay character={this.props.character} />
            </div>
        );
    }

}
function mapStateToProps(state){
    return {
        character: state.selectedCharacter
    }
}

export default connect(mapStateToProps)(Story);