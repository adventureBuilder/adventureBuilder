// Displays CharacterDisplay Component, StorySearch Component, and list of ViewStory Components

import React, { Component } from 'react';

export default class StorySelection extends Component {
    render () {
        return (
            <div id="section1">
            
            <div>    
            StorySelection
            </div>
            <h1 className="viewTitle">Stories</h1>
            {storiesArray.map((story, i) => {
                return <ViewStory key={i} story={story}/>})}

            {/* this.props.bag.map((garment, i) => {
    return <Garment key={i} index={i} garment={garment} />; */}
            <div>
            <Link to='/tavern'><button>Back to Tavern</button></Link>

            <li><a href="#section1">Back to top</a></li>
            </div>
            </div>
        );
    }
}