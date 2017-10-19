// Main View upon login (dashboard)
// Displays NewUser Comp, MyCharacters Comp, JumpToCemetary Comp, MyStories Comp
import { getCharacters } from '../../ducks/reducer';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import MyCharacters from '../MyCharacters/MyCharacters';

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
                Tavern
                {console.log(this.props.characters, "Tavern characters state")}

                <MyCharacters characterList={this.state.characters}/>
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