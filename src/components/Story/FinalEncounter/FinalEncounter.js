import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FinalEncounter extends Component {
    render() {
        return (
            <div>

                <h2 className="encounter-title">{this.props.encounter.encounter_name}</h2>
                <p className="encounter-description">{this.props.encounter.encounter_description}</p>
                <img src={this.props.encounter.image_src} alt={this.props.encounter.image_name} />
                {this.props.encounter.encounter_id == 21 ?
                    <div>
                        <br/>
                        <center><Link to='/cemetery'><button className="btn">Visit your mangled body in the cemetery!</button></Link></center>
                    </div>
                    :
                    <div>
                        <button onClick={this.props.restartStory}>Restart Story</button>
                        <Link to='/storyselection'>Go back to story Selection</Link>
                    </div>
                }

            </div>
        );
    }
}