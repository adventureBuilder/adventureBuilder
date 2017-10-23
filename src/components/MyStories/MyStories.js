// Displays a list of ViewStory Components and "Make new Story" Button
// Used by Tavern Component and potentially StoryEditor Component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class MyStories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mostRecentStories: [],
            usersMostRecentStories: [],
            storyByLevel: [],
            storyByName: [],
        }
    }

    componentWillMount() {
        axios.get(`/api/stories`)
            .then(res => {
                console.log(res.data, `mostRecentStories returned this`)
                const data = res.data;
                //console.log(data,` data const is this`)
                const mostRecentStoriesData = data.map((story, i) => <div key={i}>{story.story_name}</div>)
                //console.log(mostRecentStoriesData, `mostRecentStoriesData is this`)
                this.setState({ mostRecentStories: mostRecentStoriesData })
            })
            .catch(err => console.log(err, `see componentDidMount.getMostRecentStories axios call in MyStories.js component`))


        const username = "test"
        axios.get(`/api/user/stories/${username}`)// test more when get username functionality, maybe use this.prop.user.username from store??
            .then(res => {
                console.log(res.data, `usersMostRecentStories returned this`)
                const data = res.data;
                //console.log(data,` data const is this`)
                const usersMostRecentStoriesData = data.map((story, i) => <div key={i}>{story.story_name}</div>)
                //console.log(mostRecentStoriesData, `mostRecentStoriesData is this`)
                this.setState({ usersMostRecentStories: usersMostRecentStoriesData })
            })
            .catch(err => console.log(err, `see componentDidMount.getUsersMostRecentStories axios call in MyStories.js component`))

    }

    /*searchStoryByLevelCaller(level){
      axios.get(`/api/levels/stories/${level}`)
           .then(res=>this.setState({storyByLevel:res.data}))
           .catch(err=>console.log(err,`see componentDidMount.searchStoryByLevel axios call in MyStories.js component`))
    
    }
    
    searchStoryByNameCaller(storyName){
     axios.get(`/api/storyName/${storyName}`)
           .then(res=>this.setState({storyByName:res.data}))
           .catch(err=>console.log(err,`see componentDidMount.getStoryByName axios call in MyStories.js component`))
    }
    */
    render() {
        //const mostRecentStories=this.state.mostRecentStories.map((story,i)=><div>{story.story_name}</div>)
        return (
            <div className="my-stories">
                <h3 className="sub-title">My Stories:</h3>
                <div className="card">Most Recent : {(this.state.usersMostRecentStories.length > 0) ? this.state.usersMostRecentStories : "(you do not have any recent stories)"} </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(MyStories)