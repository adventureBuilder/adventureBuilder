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
        return (
            <div id="section1">
            <Link to='/tavern'><button>Back to Tavern</button></Link>
            <CharacterDisplay />


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