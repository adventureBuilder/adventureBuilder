import React, { Component } from 'react';
import axios from 'axios';

export default class NewStory extends Component {
    constructor() {
        super();
        this.state = {
            storyName: '',
            storyDescription: '',
            storyLevel: 1
        }
    }

    isValid(){
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
    submitStory(){
        let body = {
            storyName: this.state.storyName,
            storyDescription: this.state.storyDescription,
            storyLevel: this.state.storyLevel
        }
        axios.post('/api/story', body).then(resp=>{
            this.props.history.push(`/storycreator/${resp.data.story_id}`)
        })
    }
    render() {
        return (
            <div>
                Story Name: 
                <input 
                type='text'
                onChange={e => this.changeName(e.target.value)} 
                value={this.state.storyName}
                />
                Story Description: 
                <textarea 
                onChange={e => this.changeDescription(e.target.value)} 
                value={this.state.storyDescription}
                />
                Story Name: 
                <input 
                type='number'
                max='9'
                min='1'
                onChange={e => this.changeLevel(e.target.value)} 
                value={this.state.storyLevel}
                />
                {this.isValid() && <button onClick={_=>this.submitStory()}>Submit</button>}
            </div>
        );
    }
}