// Displays CharacterDisplay Component, StorySearch Component, and list of ViewStory Components

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ViewStory from './../ViewStory/ViewStory';
import CharacterDisplay from './../CharacterDisplay/CharacterDisplay';
import axios from 'axios';


export default class StorySelection extends Component {
    constructor(props){
        super(props);
        this.state ={
            storiesArray : []
        }
    }

    componentDidMount(){
        axios.get('/api/stories').then((res) => {
            
            this.setState({
                storiesArray: res.data
            })
        })

    }
    render () {
        // dummy data
        let tempChar = { "character_id": 1, "character_name": "HarrisonFord", "gender": "female", "dexterity": 1, "strength": 2, "charisma": 6, "health_points": 19, "alive": 1, "class_id": 1, "user_id": 1, "class_name": "test", "base_dexterity": 0, "base_strength": 0, "base_charisma": 5, "male_class_img": "http://placekitten.com/234/232", "female_class_img": "http://placekitten.com/234/232", "start_health_points": 18 }
        return (
            <div id="section1">
            <Link to='/tavern'><button>Back to Tavern</button></Link>
            <CharacterDisplay text='hello' character={tempChar}/>


            <div>    
            StorySelection
            </div>
            <h1 className="viewTitle">Stories</h1>
            {this.state.storiesArray.map((story, i) => {
                return <ViewStory key={i} story={story}/>})}

  
            <div>

            <li><a href="#section1">Back to top</a></li>
            </div>
            </div>
        );
    }
}