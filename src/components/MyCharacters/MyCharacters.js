// Displays a list of Character Components
// Used by Tavern and Cemetary Components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { getCharacters, getSelectedCharacter } from '../../ducks/reducer';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';


const styles = {
    transition: 'all 1s ease-out'
};

class MyCharacters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characterList: [],
            selectedCharacterId: null,
            characterIdModuleToShow: null,
            slideVisible: false
        }
        this.charDisplayDrop = this.charDisplayDrop.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ characterList: nextProps.characterList })
    };

    openSlide(){
        this.setState({
            slideVisible: !this.state.slideVisible
        })
    }

   

    charDisplayDrop(e) {
        if (this.state[e.target.id]) {
            this.setState({
                [e.target.id]: false
            })
        }
        else {
            this.setState({
                characterIdModuleToShow: e.target.id,
                [e.target.id]: true
            })
        }
    }

    render() {

        // console.log(this.props.selectedCharacter, `this is the selected character`)
        //console.log(this.state.showModule, this.state.characterIdModuleToShow, `state of showModule`)
       
        const characterList = this.props.characters.filter(char=> char.alive).map((character, i) =>
            <div className="tavern-char-container" key={i}>
                <div className="tavern-char-row">
                    <div className="arrow-dropdown"></div>
                    <div className="tavern-char-name-container">
                       
                        <button className="tavern-char-name" id={`${character.character_id}NameButton`} value={character.character_name} onClick={() => this.setState({ characterIdModuleToShow: character.character_id, slideVisible: !this.state.slideVisible })}><span className="down-arrow">&#9660;</span>  {character.character_name}</button>
                    </div>
                    <Link to={`/storyselection`}><button className="select-btn" id={character.character_id} onClick={() => { this.props.getSelectedCharacter(character.character_id); }}>PLAY</button></Link>
                </div>


                <div className={`${this.state[character.character_id] && 'show'}`} key={character.character_id}>
                    
                    {(this.state.characterIdModuleToShow == character.character_id + 'NameButton') && <CharacterDisplay character={character} slideVisible={this.state.slideVisible} openSlide={this.openSlide}/>}
              

                </div>
            </div>

        
        );

        return (
            <div className="my-characters-list">
                <h3 className="sub-title">My Characters:</h3>
                <div className="block-card">
                   
                    {characterList}
                    
                    <Link to={`/newcharacter`}><button className="btn">Start New Character</button></Link>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters,
        selectedCharacter: state.selectedCharacter.character_name
    }
}

export default connect(mapStateToProps, { getCharacters, getSelectedCharacter })(MyCharacters)