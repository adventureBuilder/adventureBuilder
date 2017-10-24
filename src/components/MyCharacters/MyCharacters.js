// Displays a list of Character Components
// Used by Tavern and Cemetary Components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { getCharacters, getSelectedCharacter } from '../../ducks/reducer';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';

// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')
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
            show: false,
            opacity: 0

        }
        this.charDisplayDrop = this.charDisplayDrop.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ characterList: nextProps.characterList })
    };

    /* handleClick(characterId){
        this.props.getSelectedCharacter(characterId)
     }*/

    //()=>this.props.getSelectedCharacter(character.character_id)


    //this.setState({selectedCharacterId: character})
    onHide() {
        this.setState({
            opacity: 1
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

        const characterList = this.props.characters.map((character, i) => {
            <div>

                <div className="tavern-char-row">
                    <div className="arrow-dropdown"></div>
                    <div className="tavern-char-name-container">
                        <button className="tavern-char-name" id={`${character.character_id}NameButton`} value={character.character_name} onClick={(e) => this.charDisplayDrop(e)}><span className="down-arrow">&#9660;</span>  {character.character_name}</button>
                    </div>
                    <Link to={`/storyselection`}><button className="select-btn" id={character.character_id} onClick={() => { this.props.getSelectedCharacter(character.character_id); }}>PLAY</button></Link>
                </div>


                <div className={`tavern-char-container ${this.state[character.character_id] && 'show'}`} key={character.character_id}>
                    {/* <CSSTransition key={i} classNames="example" timeout={{ enter: 500, exit: 300 }}> */}
                    {(this.state.characterIdModuleToShow == character.character_id + 'NameButton') && <CharacterDisplay character={character} /> }
                    {/* </CSSTransition> */}

                </div>
            </div>

        }
        );

        return (
            <div className="my-characters-list">
                <h3 className="sub-title">My Characters:</h3>
                <div className="block-card">
                    {/* <CSSTransitionGroup  transitionName="example"
                transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>   <TransitionGroup>*/}
                   {characterList}
                    {/* </TransitionGroup></CSSTransitionGroup> */}

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