// Displays story name, description text, creator's username, "begin story" button

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ViewStory extends Component {
    render() {
        return (
            <div className="storyContainer">
                <div className="storyHeader">
                <div className="storyTitle">
                    {this.props.story.story_name}
                </div>
                        
                <div className="storyLevel">
                Level: {this.props.story.story_level}
                </div>
                </div>
            <div className="storyDescription">{this.props.story.story_description}</div>
            
            <div className="storyFooter">
            
            <div className="storyAuthor"><p>written by:</p><h2>{this.props.story.user_name}</h2></div>
            <Link to={`/story/${this.props.story.story_id}`}><button className="beginStory">Begin story!</button></Link>

            </div>
            
            

            </div>
        );
    }
}