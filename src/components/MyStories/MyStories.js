// Displays a list of ViewStory Components and "Make new Story" Button
// Used by Tavern Component and potentially StoryEditor Component

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MyStories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        axios.get(`/api/user/stories`)
            .then(res => {
                this.setState({ stories: res.data }, console.log(this.state.stories))
            })
            .catch(err => console.log(err, `see componentDidMount.getMostRecentStories axios call in MyStories.js component`))

    }

    render() {
        let storiesarr = this.state.stories.map(story => {
            return (
                <div key={story.story_id}>
                    {story.story_name}
                </div>
            )
        })
        return (
            <div className="my-stories">
                <div className="block-card">
                    <h2 className="sub-title">My Stories</h2>

                    <div className="block-card-inner">
                        {(this.state.stories.length > 0) ? storiesarr : "(you do not have any recent stories)"}
                        <br/>
                        <Link to="/newstory" className="btn hide-mobile">Create New Story</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyStories