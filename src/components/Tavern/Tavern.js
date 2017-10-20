// Main View upon login (dashboard)
// Displays NewUser Comp, MyCharacters Comp, JumpToCemetary Comp, MyStories Comp
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Menu from './../Menu/Menu';
import MyCharacters from '../MyCharacters/MyCharacters';
import MyStories from '../MyStories/MyStories';
import NewUser from './NewUser/NewUser';
import { getCharacters } from '../../ducks/reducer';

class Tavern extends Component {
    constructor() {
        super()
        this.state = {
            characters: []
        }
    }
    
    componentDidMount() {
        this.props.getCharacters();
    }

    render () {
        return (
            <div>
                <Menu />
                <NewUser/>
                <h2>Tavern</h2>
                {console.log(this.props.characters, "Tavern characters state")}

                <MyCharacters characterList={this.state.characters}/>
                <br/>
                <MyStories/>
            </div>
            
        );
    }
}

function mapStateToProps(state){
    return{
        characters: state.characters
    }
}

export default connect(mapStateToProps, {getCharacters})(Tavern)