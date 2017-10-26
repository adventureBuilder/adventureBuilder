// Displays character name input, gender dropdown, class dropdown, stats, starting hp, "cancel" button, and "save" button
// Used by MyCharacters Component

import React, { Component } from 'react';
import axios from 'axios';

import Menu from './../../Menu/Menu';
import Footer from './../../Menu/Footer';

export default class NewCharacter extends Component {
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
            characterName: this.state.charName,
            gender: '',
            dexterity: this.state.classes[this.state.class - 1].base_dexterity,
            strength: this.state.classes[this.state.class - 1].base_strength,
            charisma: this.state.classes[this.state.class - 1].base_charisma,
            healthPoints: this.state.classes[this.state.class - 1].start_health_points,
            alive: 1,
            classId: parseInt(this.state.class)
        }
        console.log('newChar', newChar)
        axios.post('/api/character', newChar).then(
            this.props.history.push('/storyselection')
        )
    }

    render() {

        // const charStatDisplay = (


        //     // <div className="char-row char-stats">
        //     //     <div className="char-stat-row">
        //     //         <h3>Srength(STR)</h3>
        //     //         <div>{this.state.class && this.state.classes[this.state.class - 1].base_strength}</div>
        //     //     </div>
        //     //     <div className="char-stat-row">
        //     //         <h3>Dexterity(DEX)</h3>
        //     //         <div>{this.state.class && this.state.classes[this.state.class - 1].base_dexterity}</div>
        //     //     </div>
        //     //     <div className="char-stat-row">
        //     //         <h3>Charisma(CHA)</h3>
        //     //         <div>{this.state.class && this.state.classes[this.state.class - 1].base_charisma}</div>
        //     //     </div>

        //     // </div>


        // )

        return (
            <div className="new-character">

                <Menu />
                <div className="page">
                    <h2>Create A Character</h2>

                    <div className="new-character-block">
                        <div className="char-row">
                            <div className="block-card">
                                <h3 className="sub-title">Name</h3>
                                <div className="block-card-inner">
                                    <input className="base-input" onChange={(e) => this.changeChar(e.target.name, e.target.value)} name="charName" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="char-row">
                            <div className="block-card">
                                <h3 className="sub-title">Class</h3>
                                <div className="block-card-inner">

                                    <div className="char-create-container">
                                        {this.state.classes.map((charClass, i) => {
                                            return (
                                                <div className="char-class-block">
                                                    <img src={charClass.img} alt={charClass.class_name} />
                                                    <div>
                                                        <div className="char-class-text-box">
                                                            <h2>{charClass.class_name}</h2>
                                                            <p>{charClass.class_description}</p>
                                                        </div>

                                                        <div className="char-stats">
                                                            <div className="char-stat-row">
                                                                <h3 className="stat-name">STR</h3>
                                                                <h3 className="stat-num">{charClass.base_strength}</h3>
                                                            </div>
                                                            <div className="char-stat-row">
                                                                <h3 className="stat-name">Dexterity (DEX)</h3>
                                                                <h3 className="stat-num">{charClass.base_dexterity}</h3>
                                                            </div>
                                                            <div className="char-stat-row">
                                                                <h3 className="stat-name">Charisma (CHA)</h3>
                                                                <h3 className="stat-num">{charClass.base_charisma}</h3>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>

                        </div>

                        {(this.state.class && this.state.charName) ? <button onClick={() => this.createChar()}>Create</button> : ''}


                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}