// Displays character name input, gender dropdown, class dropdown, stats, starting hp, "cancel" button, and "save" button
// Used by MyCharacters Component

import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class NewCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: [],
            class: null
        }

        // this.importClasses = this.importClasses.bind(this);
        this.changeChar = this.changeChar.bind(this);

    }

    componentDidMount() {

        axios.get('/api/classes').then(res => {
            //console.log('res', res)
            this.setState({
                classes: res.data
            })

        })

    }

    changeChar(option, value) {
        this.setState({
            [option]: value
        }, () => console.log('state', this.state))

    }

    createChar() {
        // grouping content needed to send to create the character
        let newChar = {
            characterName : this.state.charName,
            gender : '',
            dexterity : this.state.classes[this.state.class - 1].base_dexterity,
            strength : this.state.classes[this.state.class - 1].base_strength,
            charisma : this.state.classes[this.state.class - 1].base_charisma,
            healthPoints : this.state.classes[this.state.class - 1].start_health_points,
            alive : 1,
            class_id : parseInt(this.state.class)
        }
        console.log('newChar', newChar)
        axios.post('/api/character', newChar).then(
            this.props.history.push('/storyselection')
        )
    }

    render() {

        const charStatDisplay = (
            
            <div className="char-row char-stats">
                <div className="char-stat-row">
                    <h3>Srength(STR)</h3>
                    <div>{this.state.class ? this.state.classes[this.state.class - 1].base_strength : ''}</div>
                </div>
                <div className="char-stat-row">
                    <h3>Dexterity(DEX)</h3>
                    <div>{this.state.class ? this.state.classes[this.state.class - 1].base_dexterity : ''}</div>
                </div>
                <div className="char-stat-row">
                    <h3>Charisma(CHA)</h3>
                    <div>{this.state.class ? this.state.classes[this.state.class - 1].base_charisma : ''}</div>
                </div>

            </div>
            
            
        )

        return (
            <div className="new-character">

                <h1>Create A Character</h1>

                <div className="new-character-block">
                    <div className="char-row">
                        <h3>Name: </h3>
                        <input onChange={(e) => this.changeChar(e.target.name, e.target.value)} name="charName" type="text" />
                    </div>
                    <div className="char-row">
                        <h3>Class: </h3>

                        <select className="select-box" name="class" onChange={(e) => this.changeChar(e.target.name, e.target.value)}>
                            <option value="Choose Your Class" selected default disabled>Choose Your Class</option>
                            {this.state.classes.map((charClass, i) => {
                                return <option key={i} value={charClass.class_id}>{charClass.class_name}</option>
                            })}

                        </select>
                    </div>


                    { this.state.class ? charStatDisplay : '' }

                    { (this.state.class && this.state.charName) ? <button onClick={()=>this.createChar()}>Create</button> : ''}
                   

                </div> 
            </div>
        );
    }
}
export default withRouter(NewCharacter);