// Displays a list of ViewStory Components and "Make new Story" Button
// Used by Tavern Component and potentially StoryEditor Component

import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class MyStories extends Component {
        constructor(props){
            super(props)
            this.state={
                mostRecentStories: [],
                usersMostRecentStories : [],
                storyByLevel: [],
                storyByName: [],
            }
        }

componentDidMount() {
       axios.get(`/api/stories`)
       .then(res=>console.log(res.data, ` this is what get stories gives back`))
       .catch(err=>console.log(err,`see componentDidMount.getMostRecentStories axios call in MyStories.js component`))

        axios.get(`/api/user/stories/${`test`}`)//this.props.user.username will become argument later
      .then(res=>console.log(res.data, ` this is what get user stories gives back`))
       .catch(err=>console.log(err,`see componentDidMount.getUsersMostRecentStories axios call in MyStories.js component`))
    }

searchStoryByLevelCaller(level){
  axios.get(`/api/levels/stories/${level}`)
       .then(res=>this.setState({storyByLevel:res.data}))
       .catch(err=>console.log(err,`see componentDidMount.searchStoryByLevel axios call in MyStories.js component`))

}

searchStoryByNameCaller(storyName){
 axios.get(`/api/storyName/${storyName}`)
       .then(res=>this.setState({storyByName:res.data}))
       .catch(err=>console.log(err,`see componentDidMount.getStoryByName axios call in MyStories.js component`))
}

    render () {
        const usersStories='user stories dummy data'
        return (
            <div className="MyStoriesArea">
                mostRecentStories: {this.state.mostRecentStories},
                usersMostRecentStories : {this.state.usersMostRecentStories},
            </div>
        );
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(MyStories)