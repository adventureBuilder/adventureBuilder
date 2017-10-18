// Main View upon login (dashboard)
// Displays NewUser Comp, MyCharacters Comp, JumpToCemetary Comp, MyStories Comp
import { getCharacters } from '../../ducks/reducer';
import { connect } from 'react-redux';
import React, { Component } from 'react';

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