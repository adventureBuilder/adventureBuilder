// Displays story name, description text, creator's username, "begin story" button

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ViewStory extends Component {
    render() {
        return (
            <div className="story-container">

                <div className="story-header">
                    <h2 className="story-title">
                        {this.props.story.story_name}
                    </h2>
                    <h3 className="story-level">
                        Level: {this.props.story.story_level}
                    </h3>
                </div>

                <p className="story-description">{this.props.story.story_description}</p>

                <div className="story-footer">
                    <div className="story-author">Author: <h3>{this.props.story.user_name}</h3></div>
                    <Link to={`/story/${this.props.story.story_id}`}><button className="btn begin-story">Begin story!</button></Link>
                </div>

            </div>
        );
    }
}