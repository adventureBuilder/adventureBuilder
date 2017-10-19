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

    componentWillReceiveProps(nextProps){
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

        let optionsArr = this.props.encounter.options && this.props.encounter.options.map(option => {
            return <Option key={option.encounter_option_id} setResults={this.setResults} option={option} />
        })
        return (
            <div>
                encounter
                <img src={this.props.encounter.image_src} alt={this.props.encounter.image_name} />
                {this.props.encounter.encounter_name}
                {this.props.encounter.encounter_description}
                {
                    this.state.resultText
                        ?
                        <div>
                            {this.state.resultText}
                            <button onClick={_=>{this.props.setEncounter(this.state.redirectEncounterId)}} >Next Encounter</button>
                        </div>
                        :
                        <div>
                            options
                            {optionsArr}

                        </div>
                }
            </div>
        );
    }
}