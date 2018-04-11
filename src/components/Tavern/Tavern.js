// Main View upon login (dashboard)
// Displays NewUser Comp, MyCharacters Comp, JumpToCemetary Comp, MyStories Comp
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Menu from './../Menu/Menu';
import Footer from './../Menu/Footer';
import MyCharacters from '../MyCharacters/MyCharacters';
import MyStories from '../MyStories/MyStories';
import NewUser from './NewUser/NewUser';
import { getCharacters, getUser } from '../../ducks/reducer';


class Tavern extends Component {
    constructor() {
        super()
        
    }

    componentDidMount() {
        this.props.getCharacters();
        this.props.getUser();
    }

    render() {
        return (

            <div className="tavern">
                <Menu title="| Tavern" />
                <div className="page">
                    <h2 className="view-title">Tavern</h2>
                    <NewUser />

                    <MyCharacters characterList={this.props.characters} />
                    
                    <br />
                    <MyStories />
                </div>
                <Footer />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, { getCharacters, getUser })(Tavern)