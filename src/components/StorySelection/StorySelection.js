// Displays CharacterDisplay Component, StorySearch Component, and list of ViewStory Components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Menu from './../Menu/Menu';
import ViewStory from './../ViewStory/ViewStory';
import CharacterDisplay from './../CharacterDisplay/CharacterDisplay';


class StorySelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storiesArray: [],
            noSearchResults: false
        }
    }

    componentDidMount() {
        axios.get('/api/stories').then((res) => {
            this.setState({
                storiesArray: res.data,
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
                    console.log('returned search result', res.data);
                    if (res.data.length !== 0) {
                        this.setState({
                            storiesArray: res.data,
                            noSearchResults : false
                        })
                    } else { this.setState({
                        storiesArray: [],
                        noSearchResults : true
                    })}
                })
                );

            case "Title":
            return (axios.get('/api/storyName/' + this.state.searchInput).then((res) => {
                console.log('returned search result', res.data);
                if (res.data.length !== 0) {
                    this.setState({
                        storiesArray: res.data,
                        noSearchResults : false
                    })
                } else { this.setState({
                    storiesArray: [],
                    noSearchResults : true
                })}
            })
            );

            case "Level":
            return (axios.get('/api/levels/stories/' + this.state.searchInput).then((res) => {
                console.log('returned search result', res.data);
                if (res.data.length !== 0) {
                    this.setState({
                        storiesArray: res.data,
                        noSearchResults : false
                    })
                } else { this.setState({
                    storiesArray: [],
                    noSearchResults : true
                })}
            })
            );

            case "Newest":
            return (axios.get('/api/stories/').then((res) => {
                console.log('returned search result', res.data);
                if (res.data.length !== 0) {
                    this.setState({
                        storiesArray: res.data,
                        noSearchResults : false
                    })
                } else { this.setState({
                    storiesArray: [],
                    noSearchResults : true
                })}
            })
            );

        }
    }

    render() {
        console.log('storiesArray', this.state.storiesArray)
        return (
            <div id="story-selection-top" className="story-selection">
                <Menu />

                <CharacterDisplay character={this.props.selectedCharacter} />

                <h2 className="viewTitle">Stories</h2>

                <div className="story-search-block">
                    <h3>Search Stories:</h3>

                    <select className="search-select-box" name="searchType" onChange={
                        (e) => this.changeStorySearch(e.target.name, e.target.value)
                    }>
                        <option value="Search By" selected default disabled>Search By</option>
                        <option value="Author">Author</option>
                        <option value="Title" >Title</option>
                        <option value="Newest" >Newest</option>
                    </select>


                    <input type="text" name="searchInput" onChange={(e) => this.changeStorySearch(e.target.name, e.target.value)} />
                { this.state.searchType ? 
                <button onClick={() => this.startSearch()}>Search</button> : 
                <div className="searchButtonPlaceholder"></div> }


                </div>
                <div className="storyResults">
                { this.state.noSearchResults ? <p>No stories were found that matched your search.</p> : <p>Your search results:</p>}

                {this.state.storiesArray.map((story, i) => {
                    return <ViewStory key={i} story={story} />
                })}
                </div>
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