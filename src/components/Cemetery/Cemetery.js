// Cemetary View - Displays MyCharacters Component and MyCharacters Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCharacters } from '../../ducks/reducer';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';

import Menu from './../Menu/Menu';

class Cemetery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characterList: [],
            selectedCharacterId: null,
            characterIdModuleToShow: null,
        }
        // this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.getCharacters();
    }
    render() {

        console.log(this.props.selectedCharacter, `this is the selected character`)
        //console.log(this.state.showModule, this.state.characterIdModuleToShow, `state of showModule`)

        const characterList = this.props.characters.filter(char => !char.alive).map((character, i) =>
            <div className="tavern-char-container" key={i}>
                <div className="tavern-char-row">
                    <div className="tavern-char-name-container">
                        <button className="tavern-char-name" id={`${character.character_id}NameButton`} onClick={() => this.setState({ characterIdModuleToShow: character.character_id })}><span className="down-arrow">&#9660;</span>  {character.character_name}</button>
                    </div>
                </div>
                <div>{(this.state.characterIdModuleToShow === character.character_id) ? <CharacterDisplay character={character} /> : ''}</div>
            </div>)

        return (
            <div className="my-characters-list">
                <h3 className="sub-title">Cemetery:</h3>

                {characterList}

                <Link to={`/newcharacter`}><button className="btn">Start New Character</button></Link>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, { getCharacters })(Cemetery)