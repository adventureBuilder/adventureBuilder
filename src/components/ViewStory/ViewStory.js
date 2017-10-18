// Displays story name, description text, creator's username, "begin story" button

import React, { Component } from 'react';

export default class ViewStory extends Component {
    render() {
        return (
            <div className="storyContainer">
                <div className="storyHeader">
                <div className="storyTitle">
                    Story Name
                </div>
                        
                <div className="storyLevel">
                Level: X
                </div>
                </div>
            <div className="storyDescription">story description: There once was a boy named Jerry who lived in the woods.  He had no mother and was chased my a horse.  The end.</div>
            
            <div className="storyFooter">
            
            <div className="storyAuthor"><p>written by:</p><h2>User Name</h2></div>
            <button className="beginStory">Begin story!</button>

            </div>
            
            

            </div>
        );
    }
}