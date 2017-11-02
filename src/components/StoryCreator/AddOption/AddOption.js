import React, { Component } from 'react';
import axios from 'axios';

export default class AddOption extends Component {

    constructor() {
        super()
        this.state = {
            optionName: '',
            optionDescription: '',
            numOfDice: '1',
            sideOfDice: '4',
            modifier: '',
            optionPassCase: 1,
            successText: '',
            failText: '',
            successEncounter: -1,
            failedEncounter: -1,
            optionImagesId: -1,
            healthConsequences: 0,
            optionImages: []
        }
    }

    componentDidMount() {
        axios.get('/api/images/option').then(resp => {
            this.setState({
                optionImages: resp.data
            })
        })
    }

    isValid() {
        if (this.state.optionName !== '' &&
            this.state.optionDescription !== '' &&
            this.state.optionDescription.length < 141 &&
            this.state.successText !== '' &&
            this.state.successText.length < 141 &&
            this.state.failText !== '' &&
            this.state.failText.length < 141 &&
            this.state.successEncounter !== -1 &&
            this.state.failedEncounter !== -1 &&
            this.state.optionImagesId !== -1) {
            return true;
        }
        return false
    }
    saveOption() {
        let body = {
            encounterId: this.props.encounter.encounter_id,
            optionName: this.state.optionName,
            optionDescription: this.state.optionDescription,
            optionOdds: this.makeOdds(),
            optionPassCase: this.state.optionPassCase,
            successText: this.state.successText,
            failText: this.state.failText,
            successEncounter: this.state.successEncounter,
            failedEncounter: this.state.failedEncounter,
            optionImagesId: this.state.optionImagesId,
            healthConsequences: this.state.healthConsequences
        }
        axios.post('/api/option', body).then(resp => {
            this.props.resetView();
        })
    }


    makeOdds() {
        let tempStr = `${this.state.numOfDice}d${this.state.sideOfDice}`
        if (this.state.modifier !== '') {
            tempStr += `+${this.state.modifier}`
        }
        return tempStr
    }

    changeName(name) {
        this.setState({
            optionName: name
        });
    }

    changeDescription(description) {
        this.setState({
            optionDescription: description
        });
    }

    changeOptionImage(optionImage) {
        this.setState({
            optionImagesId: parseInt(optionImage)
        });
    }

    changeNumOfDice(num) {
        this.setState({
            numOfDice: num
        });
    }

    changeSidesOfDice(num) {
        this.setState({
            sideOfDice: num
        });
    }

    changePassCase(num) {
        this.setState({
            optionPassCase: num
        });
    }

    changeHealthConsequence(num) {
        this.setState({
            healthConsequences: num
        });
    }

    changeSuccessText(text) {
        this.setState({
            successText: text
        });
    }

    changeFailText(text) {
        this.setState({
            failText: text
        });
    }

    changeSuccesEncounter(encounterId) {
        this.setState({
            successEncounter: parseInt(encounterId)
        });
    }

    changeFailedEncounter(encounterId) {
        this.setState({
            failedEncounter: parseInt(encounterId)
        });
    }

    changeModifier(str) {
        this.setState({
            modifier: str
        });
    }

    render() {
        let previousEncounters = this.props.encounter.options.map(option => {
            return (
                <div className="option-row" key={option.encounter_option_id}>

                    <h3 className="option-type-title">{option.option_name}</h3>
                    {option.option_description}

                </div>)

        });
        let encounterOptions = this.props.storyEncounters.map(encounter => (
            <option key={encounter.encounter_id} value={encounter.encounter_id}>{encounter.encounter_name}</option>
        ))

        let successEncounterImage = this.props.storyEncounters.find(encounter =>
            encounter.encounter_id === this.state.successEncounter
        );

        let failedEncounterImage = this.props.storyEncounters.find(encounter =>
            encounter.encounter_id === this.state.failedEncounter
        );

        let imageOptions = this.state.optionImages.map(optionImage =>
            <option
                key={optionImage.option_images_id}
                value={optionImage.option_images_id}>
                {optionImage.image_name}
            </option>
        )

        let optionImage = this.state.optionImages.find(image =>
            image.option_images_id === this.state.optionImagesId
        );
        return (
            <div>

                <h3 className="sub-title">{this.props.encounter.encounter_name}</h3>
                <div className="block-card-inner">
                    <p className="encounter-description">{this.props.encounter.encounter_description}</p>
                </div>

                <h3 className="sub-title">Created Options:</h3>
                <div className="created-options">
                    <div className="block-card-inner">
                        {previousEncounters}
                    </div>
                </div>
                <h3 className="sub-title">New Option</h3>
                <div className="block-card-inner">
                    <div className="option-row">
                        <h3 className="option-type-title">Option Name: <small>(One word works best)</small></h3>
                        <input className="base-input pad-it" placeholder="Ex. Fight, Sneak, Negotiate, Charm.." onChange={e => this.changeName(e.target.value)} type='text' value={this.state.optionName} />
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Option Description:</h3>
                        <textarea className="base-input pad-it " onChange={e => this.changeDescription(e.target.value)} value={this.state.optionDescription} />
                        <span className="indent-it"><i>{this.state.optionDescription ? this.state.optionDescription.length : "0"}/140</i></span>
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Option Icon:</h3>
                        <select className="base-input" value={this.state.optionImagesId} onChange={e => this.changeOptionImage(e.target.value)}>
                            <option value={-1}>Select One</option>
                            {imageOptions}
                        </select>
                        <div>
                            {optionImage
                                ?
                                <img className="pad-it story-creator-add-img" src={optionImage.image_src} alt={optionImage.image_name} />
                                :
                                <p className="indent-it">No option icon selected yet.</p>}
                        </div>
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title inline"> Number of Dice to Roll:</h3>
                        <select className="base-input small" onChange={e => this.changeNumOfDice(e.target.value)} value={this.state.numOfDice} >
                            <option defaultValue value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                        </select>
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title inline">Sides of Dice to Roll:</h3>
                        <select className="base-input small" onChange={e => this.changeSidesOfDice(e.target.value)} value={this.state.sideOfDice} >
                            <option defaultValue value={4}>4</option>
                            <option value={6}>6</option>
                            <option value={8}>8</option>
                            <option value={10}>10</option>
                            <option value={12}>12</option>
                            <option value={20}>20</option>
                            <option value={100}>100</option>
                        </select>
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Modifiers:</h3>

                        <div className="option-list">
                            <div className="option-list-item">
                                <input type='radio' name='modifier' value='' onChange={e => this.changeModifier(e.target.value)} />
                                <span className="indent-it">None</span>
                            </div>
                            <div className="option-list-item">
                                <input type='radio' name='modifier' value='str' onChange={e => this.changeModifier(e.target.value)} />
                                <span className="indent-it">Strength</span>
                            </div>
                            <div className="option-list-item">
                                <input type='radio' name='modifier' value='dex' onChange={e => this.changeModifier(e.target.value)} />
                                <span className="indent-it">Dexterity</span>
                            </div>
                            <div className="option-list-item">
                                <input type='radio' name='modifier' value='cha' onChange={e => this.changeModifier(e.target.value)} />
                                <span className="indent-it">Charisma</span>
                            </div>
                        </div>
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title inline">Needed Roll to Succeed:</h3>
                        <input className="base-input small"
                            onChange={e => this.changePassCase(e.target.value)}
                            type='number'
                            value={this.state.optionPassCase}
                            min={1}
                            max={this.state.numOfDice * this.state.sideOfDice} />
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title inline">Health Consequences:</h3>
                        <input className="base-input small"
                            type='number'
                            value={this.state.healthConsequences}
                            onChange={e => this.changeHealthConsequence(e.target.value)}
                            min={-3}
                            max={5} />
                        <p className="description">Positive number reduces hp. Negative number restores hp.</p>

                    </div>


                    <h3 className="sub-title result-title">Success Results</h3>
                    <div className="option-row">
                        <h3 className="option-type-title">Success Text:</h3>
                        <textarea className="base-input"
                            onChange={e => this.changeSuccessText(e.target.value)}
                            value={this.state.successText} />
                        <span className="indent-it"> <i>{this.state.successText ? this.state.successText.length : "0"}/140</i></span>
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Success Encounter</h3>
                        <p className="description">Where the hero should go after succeeding this option.</p>
                        <select className="base-input"
                            onChange={e => this.changeSuccesEncounter(e.target.value)}
                            value={this.state.successEncounter}>
                            <option defaultValue value={-1}>Select One</option>
                            {encounterOptions}
                        </select>
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Preview Success Encounter:</h3>
                        {
                            this.state.successEncounter === -1
                                ?
                                <p className="indent-it">No success encounter selected</p>
                                :
                                <img className="base-input story-creator-add-img"
                                    src={successEncounterImage.image_src}
                                    alt={successEncounterImage.image_name} />
                        }
                    </div>


                    <h3 className="sub-title result-title">Fail Results</h3>
                    <div className="option-row">
                        <h3 className="option-type-title">Fail Text:</h3>
                        <textarea className="base-input"
                            onChange={e => this.changeFailText(e.target.value)}
                            value={this.state.failText} />
                        <span className="indent-it">  <i>{this.state.failText ? this.state.failText.length : "0"}/140</i></span>

                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Fail Encounter</h3>
                        <p className="description">Where the hero should go after failing this option.</p>
                        <select className="base-input"
                            onChange={e => this.changeFailedEncounter(e.target.value)}
                            value={this.state.failedEncounter}>
                            <option defaultValue value={-1}>Select One</option>
                            {encounterOptions}
                        </select>
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Preview Failed Encounter:</h3>
                        <div className="indent-it">
                            {
                                this.state.failedEncounter === -1
                                    ?
                                    <p>no failed encounter select</p>
                                    :
                                    <img className="base-input story-creator-add-img"
                                        src={failedEncounterImage.image_src}
                                        alt={failedEncounterImage.image_name} />
                            }
                        </div>
                    </div>
                    {this.isValid() ? <button className="btn" onClick={_ => this.saveOption()}>Save Option</button> : <p className="description invalid">Please fill out all fields in order to save the current Option.</p>}
                </div>
            </div>
        );
    }
}