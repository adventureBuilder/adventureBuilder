// Displays CharacterDisplay Component, StorySearch Component, and list of ViewStory Components

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import ViewStory from './../ViewStory/ViewStory';
import CharacterDisplay from './../CharacterDisplay/CharacterDisplay';


class StorySelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storiesArray: []
        }
    }

    componentDidMount() {
        axios.get('/api/stories').then((res) => {
            this.setState({
                storiesArray: res.data
            })
        })
    }

    render() {
        // dummy data
        //let tempChar = { "character_id": 1, "character_name": "HarrisonFord", "gender": "female", "dexterity": 1, "strength": 2, "charisma": 6, "health_points": 19, "alive": 1, "class_id": 1, "user_id": 1, "class_name": "test", "base_dexterity": 0, "base_strength": 0, "base_charisma": 5, "male_class_img": "http://placekitten.com/234/232", "female_class_img": "http://placekitten.com/234/232", "start_health_points": 18 }
        return (
            <div id="story-selection-top" className="story-selection">
                <Link to='/tavern'><button>Back to Tavern</button></Link>

                <CharacterDisplay character={this.props.selectedCharacter} />

                <h1 className="viewTitle">Stories</h1>


                {this.state.storiesArray.map((story, i) => {
                    return <ViewStory key={i} story={story} />
                })}

                <div>
                    <li><a href="#story-selection-top">Back to top</a></li>
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
export default connect(mapStateToProps, {})(StorySelection)