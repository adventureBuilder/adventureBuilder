// Displays the option icon, text, and "Choose Option" Button
// Used by Encounter Component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeHP } from '../../../../ducks/reducer'

class Options extends Component {
    constructor(props) {
        super(props);

        this.state = {
            optionShow: false,
            nextEncounter: null,
            resultText: ''
        }
        this.clickOption = this.clickOption.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.optionShow == false) {
            this.setState({
                optionShow: nextProps.optionShow
            })
        }
    }

    rollDice() {
        let tempArr = this.props.option.option_odds.split('+');
        let diceArr = String(tempArr.splice(0, 1)).split('d');
        let num = 0;
        for (let i = 0; i < diceArr[0]; i++) {
            num += Math.floor(Math.random() * parseInt(diceArr[1])) + 1;
        }

        for (let i = 0; i < tempArr.length; i++) {
            switch (tempArr[i]) {
                case 'dex':
                    num += this.props.character.dexterity;
                    break;
                case 'str':
                    num += this.props.character.strength;
                    break;
                case 'cha':
                    num += this.props.character.charisma;
                    break;
            }
        }
        this.props.disableButtons();
        return num;
    }

    chooseOption() {
        let num = this.rollDice();
        if (num < this.props.option.options_pass_case) {
            //set fail text
            //sets redirect encounter
            this.props.changeHP(this.props.character.character_id, this.props.character.health_points, this.props.option.health_consequences).then(res => {
                if (this.props.character.alive) {
                    this.setState({
                        resultText: this.props.option.failed_text,
                        nextEncounter: this.props.option.failed_encounter
                    });
                } else {
                    this.setState({
                        resultText: this.props.option.failed_text + ' You dead!',
                        nextEncounter: 21
                    });
                }
            })
        } else {
            // sets success text
            //sets redirect encounter
            this.setState({
                resultText: this.props.option.success_text,
                nextEncounter: this.props.option.success_encounter
            });
        }
    }
    clickOption() {
        if (!this.state.optionShow && !this.props.optionShow) {
            this.props.resetOptionTabs();
            this.setState({
                optionShow: true
            })
        } else if (this.props.optionShow && !this.state.optionShow) {
            this.props.resetOptionTabs();
            setTimeout(() => {
                this.props.resetOptionTabs();
                this.setState({
                    optionShow: true
                })
            }, 900)

        } else {
            this.props.resetOptionTabs();
        }

    }

    render() {
        return (
            <div className={'option-' + this.props.index}>

                <button disabled={this.props.isDisable} className="option-name" onClick={this.clickOption}>

                    <img className="option-icon" src={this.props.option.image_src} alt="" />{this.props.option.option_name}

                    <div className="option-arrow"></div>
                    <div className="option-arrow-tab"></div>
                    <div className="option-arrow-tab2"></div>

                </button>
                <div className={`option-card ${(this.state.optionShow && `option-card-peek-${this.props.index}`)}`}>
                    <p className="option-description">{this.props.option.option_description}</p>
                    {this.state.nextEncounter ?
                        <div>
                            {this.state.resultText}
                            <button className="btn" onClick={_ => { this.props.setEncounter(this.state.nextEncounter) }} >Next Encounter</button>
                        </div>
                        :
                        <button className="btn" onClick={_ => { this.chooseOption() }}>Attempt</button>
                    }
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        character: state.selectedCharacter
    }
}

export default connect(mapStateToProps, { changeHP })(Options);