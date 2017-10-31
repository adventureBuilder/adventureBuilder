// Displays Encounter image, text, and Options Components
// Used by Story Component

import React, { Component } from 'react';
import Option from './Options/Options';

export default class Encounter extends Component {
    constructor() {
        super();
        this.state = {
            optionsShow: false,
            disableButtons: false
        }
        this.resetOptionTabs = this.resetOptionTabs.bind(this)
        this.disableButtons = this.disableButtons.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.encounter.encounter_id !== nextProps.encounter.encounter_id) {

            this.setState({
                optionsShow: false,
                disableButtons: false
            })
        }
    }

    resetOptionTabs() {
        this.setState({
            optionsShow: !this.state.optionsShow
        })
    }

    disableButtons() {
        this.setState({
            disableButtons: !this.state.disableButtons
        })
    }

    render() {

        let optionsArr = this.props.encounter.options && this.props.encounter.options.map((option, i) => {
            return <Option
                key={option.encounter_option_id}
                index={i}
                optionShow={this.state.optionsShow}
                option={option}
                isDisable={this.state.disableButtons}
                disableButtons={this.disableButtons}
                resetOptionTabs={this.resetOptionTabs}
                setEncounter={this.props.setEncounter} />
        })
        return (
            <div>
                <h2 className="encounter-title">{this.props.encounter.encounter_name}</h2>
                <p className="encounter-description">
                    {this.props.encounter.encounter_description}
                </p>
                <div className="encounter-image-container">
                    <img className="encounter-image" src={this.props.encounter.image_src} alt={this.props.encounter.image_name} />
                    <div className="options">

                        {optionsArr}

                    </div>

                </div>




            </div>
        );
    }
}