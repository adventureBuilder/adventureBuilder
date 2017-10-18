// Main View upon login (dashboard)
// Displays NewUser Comp, MyCharacters Comp, JumpToCemetary Comp, MyStories Comp
import { getCharacters } from '../../ducks/reducer';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Tavern extends Component {
    
    render () {
        return (
            <div>
                Tavern
                <button onClick={()=>this.props.getCharacters()}>Test Get Characters</button>
            {this.props.characters}
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