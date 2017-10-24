// Displays Encounter image, text, and Options Components
// Used by Story Component

import React, { Component } from 'react';
import Option from './Options/Options';

export default class Encounter extends Component {
    constructor() {
        super();
        this.state = {
            resultText: '',
            redirectEncounterId: ''
        }
        this.setResults = this.setResults.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            resultText: '',
            redirectEncounterId: ''
        })
    }

    setResults(resultText, redirectEncounterId) {
        this.setState({
            resultText: resultText,
            redirectEncounterId: redirectEncounterId
        })
    }


    render() {

        let optionsArr = this.props.encounter.options && this.props.encounter.options.map((option, i) => {
            return <Option key={option.encounter_option_id} id={i} setResults={this.setResults} option={option} />
        })
        console.log('optionsArr', optionsArr);
        return (
            <div>
                <h2 className="encounter-title">{this.props.encounter.encounter_name}</h2>
                <p className="encounter-description">
                    {this.props.encounter.encounter_description}
                </p>
                <div>
                    <img className="encounter-image" src={this.props.encounter.image_src} alt={this.props.encounter.image_name} />
                </div>
               


                {
                    this.state.resultText
                        ?
                        <div>
                            {this.state.resultText}
                            <button className="btn" onClick={_ => { this.props.setEncounter(this.state.redirectEncounterId) }} >Next Encounter</button>
                        </div>
                        :
                        <div className="options">
                            <h3>Options</h3>
                            {optionsArr}

                        </div>
                }
            </div>
        );
    }
}