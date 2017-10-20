// Displays CharacterDisplay Component, StorySearch Component, and list of ViewStory Components

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Menu from './../Menu/Menu';
import ViewStory from './../ViewStory/ViewStory';
import CharacterDisplay from './../CharacterDisplay/CharacterDisplay';


class StorySelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storiesArray: []
        }
    }

    componentDidMount() {
        axios.get('/api/stories').then((res) => {
            this.setState({
                storiesArray: res.data
            })
        })
    }

    changeStorySearch(option, value) {
        this.setState({
            [option]: value
        }, () => console.log('state', this.state))

    }
    startSearch() {
        switch (this.state.searchType) {
            case "Author":
                return (axios.get('/api/user/stories/' + this.state.searchInput).then((res) => {
                    console.log(res.data);
                    if (!res.data === false)
                        this.setState({
                            storiesArray: res.data
                        })
                })
                )



        }
    }

    render() {
        console.log('storiesArray', this.state.storiesArray)
        return (
            <div id="story-selection-top" className="story-selection">
                <Menu />

                <CharacterDisplay character={this.props.selectedCharacter} />

                <h1 className="viewTitle">Stories</h1>

                <div className="story-search-block">
                    <h2>Search Stories:</h2>

                    <select className="search-select-box" name="searchType" onChange={
                        (e) => this.changeStorySearch(e.target.name, e.target.value)
                    }>
                        <option value="Search By" selected default disabled>Search By</option>
                        <option value="Author">Author</option>
                        <option value="Newest" >Newest</option>
                        <option value="Name" >Name</option>
                    </select>


                    <input type="text" name="searchInput" onChange={(e) => this.changeStorySearch(e.target.name, e.target.value)} />
                    <button onClick={() => this.startSearch()}>Search</button>


                </div>

                {this.state.storiesArray.map((story, i) => {
                    return <ViewStory key={i} story={story} />
                })}

                <div>
                    <li><a href="#story-selection-top">Back to top</a></li>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedCharacter: state.selectedCharacter
    }
}
export default connect(mapStateToProps, {})(StorySelection)