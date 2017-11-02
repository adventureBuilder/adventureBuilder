// Displays user name, "abandon story" Button, story name, Encounter Component, and CharacterDisplay Component

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import GameMenu from './../Menu/GameMenu';
// import Footer from './../Menu/Footer';
import Encounter from './Encounter/Encounter';
import FinalEncounter from './FinalEncounter/FinalEncounter';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';

// import luteIcon from '../../images/ab-lute-icon.svg';
// import daggerIcon from '../../images/ab-dagger-icon.svg';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: {},
            storyId: props.match.params.id,
            currentEncounter: {}
        }
        this.setEncounter = this.setEncounter.bind(this);
        this.restartStory = this.restartStory.bind(this);
    }

    componentDidMount() {
        if(!this.props.character.character_id){
            this.props.history.push('/tavern');
        }
        axios.get(`/api/story/${this.state.storyId}`).then(resp => {
            let startEncounterId = resp.data.start_encounter_id;
            let story = resp.data;
            this.setState({ story: resp.data });
            this.setEncounter(startEncounterId);
        });

    }

    setEncounter(encounterId) {
        axios.get(`/api/getEncounters/${encounterId}`).then(resp => {
            this.setState({ currentEncounter: resp.data });
        });
    }

    restartStory() {
        axios.get(`/api/getEncounters/${this.state.story.start_encounter_id}`).then(resp => {
            this.setState({ currentEncounter: resp.data });
        });
    }

    render() {

        return (
            <div className="story">
                <GameMenu />
                <div className="page">
                    <div className="story-header">
                        <h2 className="story-title">{this.state.story.story_name}</h2>
                        {/* <h3 className="story-author"></h3> */}
                    </div>
                    <div className="card">



                        {
                            this.state.currentEncounter.final_encounter
                                ?
                                <FinalEncounter encounter={this.state.currentEncounter} restartStory={this.restartStory} />
                                :
                                <Encounter setEncounter={this.setEncounter} encounter={this.state.currentEncounter} />
                        }
                    </div>

                    <CharacterDisplay character={this.props.character} />

                </div>
                
            </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        character: state.selectedCharacter
    }
}

export default connect(mapStateToProps)(Story);