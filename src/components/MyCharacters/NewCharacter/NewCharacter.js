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

    changeClass(val) {
        console.log('val=',val)
        this.setState({
            class: val
        }, this.createChar)
    }
    createChar(val) {
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
            this.props.history.push('/tavern')
        )
    }

    render() {

        return (
            <div className="new-character">

                <Menu />
                <div className="page">
                    <h2 className="view-title">Create A Character</h2>

                    <div className="new-character-block">
                        <div className="char-row">
                            <div className="block-card">
                                <h2 className="sub-title">Name</h2>
                                <div className="block-card-inner">
                                    <input className="base-input" onChange={(e) => this.changeChar(e.target.name, e.target.value)} name="charName" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="char-row">
                            <div className="block-card">
                                <h2 className="sub-title">Class</h2>
                                <div className="block-card-inner">

                                    <div className="char-create-container">
                                        {this.state.classes.map((charClass, i) => {
                                            console.log(charClass)
                                            return (
                                                <div key={charClass.class_id} className="char-class-block">
                                                    <img src={charClass.male_class_img} alt={charClass.class_name} />
                                                    <div>
                                                        <div className="char-class-text-box">
                                                            <h2>{charClass.class_name}</h2>
                                                            <p>{charClass.class_description}</p>
                                                        </div>

                                                        <div className="char-stats">
                                                            <div className="char-stat-row">
                                                                <h3 className="stat-name">Strength</h3>
                                                                <h3 className="stat-num">{charClass.base_strength}</h3>
                                                            </div>
                                                            <div className="char-stat-row">
                                                                <h3 className="stat-name">Dexterity</h3>
                                                                <h3 className="stat-num">{charClass.base_dexterity}</h3>
                                                            </div>
                                                            <div className="char-stat-row">
                                                                <h3 className="stat-name">Charisma</h3>
                                                                <h3 className="stat-num">{charClass.base_charisma}</h3>
                                                            </div>
                                                            {/* <div className="char-stat-row">
                                                                <h3 className="stat-name">Health</h3>
                                                                <h3 className="stat-num">20</h3>
                                                            </div> */}

                                                        </div>
                                                        <div className="new-char-btn">
                                                        {this.state.charName && <button className="btn" value={charClass.class_id} onClick={(e)=>this.changeClass(e.target.value)}>Create {charClass.class_name}</button> }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* //I've chained the createChar function to the select class button to reduce clicks
                        {(this.state.class && this.state.charName) ? <button onClick={() => this.createChar()}>Create</button> : ''} */}


                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}