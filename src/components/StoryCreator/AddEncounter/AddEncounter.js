import React, { Component } from 'react';
import axios from 'axios';

export default class AddEncounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encounterName: '',
            encounterDescription: '',
            finalEncounter: 0,
            encounterBackGroundImage: -1,
            encounterImages: []
        }
    }


    componentDidMount() {
        axios.get('/api/images/encounter').then(resp => {
            this.setState({
                encounterImages: resp.data
            })
        })
    }

    changeImage(imageId) {
        this.setState({
            encounterBackGroundImage: parseInt(imageId)
        })
    }

    changeName(name) {
        this.setState({
            encounterName: name
        });
    }

    changeDescription(description) {
        this.setState({
            encounterDescription: description
        })
    }

    changeFinal(isFinal) {
        this.setState({
            finalEncounter: parseInt(isFinal)
        });
    }

    isValid() {
        if (this.state.encounterDescription !== '' && this.state.encounterName !== '' && this.state.encounterBackGroundImage != -1) {
            return true;
        }
        return false;
    }

    save() {
        this.props.isFirst
            ?
            this.saveFirstEncounter()
            :
            this.saveEncounter()
            ;
    }

    saveFirstEncounter() {
        let body = {
            encounterName: this.state.encounterName,
            encounterDescription: this.state.encounterDescription,
            finalEncounter: 0,
            storyId: this.props.storyId,
            encounterBackGroundImage: this.state.encounterBackGroundImage
        }

        axios.post('/api/firstEncounter', body).then(_ => {
            this.props.resetView();
        });
    }
    saveEncounter() {
        let body = {
            encounterName: this.state.encounterName,
            encounterDescription: this.state.encounterDescription,
            finalEncounter: this.state.finalEncounter,
            storyId: this.props.storyId,
            encounterBackGroundImage: this.state.encounterBackGroundImage
        }

        axios.post('/api/encounter', body).then(_ => {
            this.props.resetView();
        });
    }

    render() {
        let imageSelector = (
            <select className="base-input" onChange={e => this.changeImage(e.target.value)}>
                <option value={-1}>Select an Image</option>
                {this.state.encounterImages.map(image => {
                    return <option
                        key={image.encounter_background_images_id}
                        value={image.encounter_background_images_id}>
                        {image.image_name}
                    </option>
                })}
            </select>
        )

        let selectedImage = this.state.encounterImages.find(image => {
            return this.state.encounterBackGroundImage === parseInt(image.encounter_background_images_id)
        });
        return (
            <div>
                {
                    this.props.isFirst
                    &&
                    <div><h3 className="sub-title">Starting Encounter</h3>
                        <p className="description">This is the starting location for adventurers to begin their journey</p></div>
                }
                <h3 className="sub-title">New Encounter</h3>
                <div className="block-card-inner">
                    <div className="option-row">
                        <h3 className="option-type-title">Encounter Title:</h3>
                        <input className="base-input" onChange={e => this.changeName(e.target.value)} value={this.state.encounterName} />
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Encounter Story:</h3>
                        <textarea className="base-input" onChange={e => this.changeDescription(e.target.value)} value={this.state.encounterDescription} />
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Background Image:</h3>
                        {imageSelector}
                    </div>
                    <div className="option-row">
                        <h3 className="option-type-title">Image Preview:</h3>
                        <div>
                            {
                                this.state.encounterBackGroundImage != -1
                                    ?
                                    <img className="base-input"
                                        src={selectedImage.image_src}
                                        alt={selectedImage.image_name} />
                                    :
                                    <div className="preview-text"><p>No Image Selected</p></div>
                            }
                        </div>
                    </div>
                    <div className="option-row">
                        {
                            !this.props.isFirst
                            &&
                            <div>
                                <h3 className="option-type-title inline">Final Encounter Check:</h3><select className="base-input small" onChange={e => this.changeFinal(e.target.value)}>
                                    <option value={0}>no</option>
                                    <option value={1}>yes</option>
                                </select>
                                <p className="description">Is this encounter the ending of a story path? </p>
                        
                            </div>
                        }
                    </div>
                    <div className="option-row">
                        {this.isValid() && <button className='btn' onClick={_ => this.save()}>Save</button>}
                    </div>
                </div>
            </div>
        );
    }
}