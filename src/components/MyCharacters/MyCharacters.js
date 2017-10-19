// Displays a list of Character Components
// Used by Tavern and Cemetary Components

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCharacters, getSelectedCharacter} from '../../ducks/reducer';
import axios from 'axios';
import CharacterDisplay from '../CharacterDisplay/CharacterDisplay';
class MyCharacters extends Component {
        constructor(props){
            super(props)
                this.state={
                    characterList: [],
                    selectedCharacterId: null,
                   characterIdModuleToShow: null,
                }
               // this.handleClick=this.handleClick.bind(this);
        }

 componentWillReceiveProps(nextProps){
        this.setState({characterList: nextProps.characterList})
     };

  /* handleClick(characterId){
      this.props.getSelectedCharacter(characterId)
   }*/

    //()=>this.props.getSelectedCharacter(character.character_id)


    //this.setState({selectedCharacterId: character})

    render () {
      
       console.log(this.props.selectedCharacter, `this is the selected character`)
       //console.log(this.state.showModule, this.state.characterIdModuleToShow, `state of showModule`)
        const characterList =this.props.characters.map((character,i)=>
        <div key={i}>
        <button id={`${character.character_id}NameButton`} onClick={()=>this.setState({characterIdModuleToShow: character.character_id})}>{character.character_name}</button>
       <Link to={`/storyselection`}><button id={character.character_id} onClick={()=>{this.props.getSelectedCharacter(character.character_id);  }}>select</button></Link>
        <div>{(this.state.characterIdModuleToShow === character.character_id) ?  <CharacterDisplay character={character}/>: '' }</div>
        </div>)
        return (
            <div>
                MyCharacters:
                
                    {characterList}
               

            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        characters: state.characters,
        selectedCharacter: state.selectedCharacter.character_name
    }
}

export default connect(mapStateToProps, {getCharacters,getSelectedCharacter})(MyCharacters)