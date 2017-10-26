import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../Menu/Menu';

export default class NewStory extends Component {
    constructor() {
        super();
        this.state = {
            storyName: '',
            storyDescription: '',
            storyLevel: 1
        }
    }

    isValid() {
        return this.state.storyName !== '' && this.state.storyDescription !== ''
    }

    changeName(name) {
        this.setState({
            storyName: name
        });
    }
    changeDescription(Description) {
        this.setState({
            storyDescription: Description
        });
    }
    changeLevel(Level) {
        this.setState({
            storyLevel: Level
        });
    }
    submitStory() {
        let body = {
            storyName: this.state.storyName,
            storyDescription: this.state.storyDescription,
            storyLevel: this.state.storyLevel
        }
        axios.post('/api/story', body).then(resp => {
            this.props.history.push(`/storycreator/${resp.data.story_id}`)
        })
    }
    render() {
        return (
            <div className="new-story">
                <Menu />
                <div className="page">
                    <div className="new-story-container">
                        <h2 className="view-title" >Create A Story</h2>
                        <div className="story-row">
                            <h3 className="sub-title">Story Name</h3>
                            <input className="base-input"
                                type='text'
                                onChange={e => this.changeName(e.target.value)}
                                value={this.state.storyName}
                            />
                        </div>
                        <div className="story-row">
                            <h3 className="sub-title">Story Description</h3>
                            <textarea className="base-input"
                                onChange={e => this.changeDescription(e.target.value)}
                                value={this.state.storyDescription}
                            />
                        </div>
                        <div className="story-row">
                            <h3 className="sub-title">Difficulty Level</h3>
                            <input className="base-input"
                                type='number'
                                max='9'
                                min='1'
                                onChange={e => this.changeLevel(e.target.value)}
                                value={this.state.storyLevel}
                            />
                        </div>
                        <div className="story-row">
                            {this.isValid() && <button className='btn create-story-submit-btn' onClick={_ => this.submitStory()}>Continue</button>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}