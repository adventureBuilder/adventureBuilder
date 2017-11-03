// Cemetary View - Displays MyCharacters Component and MyCharacters Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCharacters } from '../../ducks/reducer';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';

import Menu from './../Menu/Menu';
import Footer from './../Menu/Footer';

import skullIcon from '../../images/ab-skull-icon.svg';
import arrowIcon from '../../images/ab-other-arrow.svg';

class Cemetery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characterList: [],
            characterIdModuleToShow: null,
            modulesToShow: []
        }
        // this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.getCharacters();
    }

    showModule(characterId) {

        let tempArr = this.state.modulesToShow.slice();
        let index = tempArr.indexOf(characterId);

        if (index === -1) {
            tempArr.push(characterId);
        } else {
            tempArr.splice(index, 1);
        }

        this.setState({
            modulesToShow: tempArr
        })
    }

    render() {


        const characterList = this.props.characters.filter(char => !char.alive).map((character, i) =>
            <div className="tavern-char-container" key={i}>
                <div className="tavern-char-row">
                    <div className="tavern-char-name-container" onClick={_ => this.showModule(character.character_id)}>
                        <button className="tavern-char-name">
                            <img className="arrow-icon" src={arrowIcon} alt="arrow" />  {character.character_name}
                            <img className="life-icon" src={skullIcon} alt="life-icon" /></button>
                    </div>
                </div>
                <div onClick={_ => this.showModule(character.character_id)}
                    className={((this.state.modulesToShow.indexOf(character.character_id) === -1)
                        ?
                        'dropup'
                        :
                        'dropdown')
                    }><CharacterDisplay character={character} life="dead" /></div>
            </div>)

        return (
            <div className="cemetery">
                <div className="my-characters-list">
                    <Menu />
                    <div className="page">
                        <h2 className="view-title">Cemetery</h2>
                        <div className="block-card">
                            <h2 className="sub-title">Deceased Characters</h2>

                            <div className="block-card-inner">
                                {characterList}


                                {<Link to={`/newcharacter`}><button className="btn">Start New Character</button></Link>}

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
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