// Displays input, sort dropdown, "search" button
// Used by StorySelection Component

import React, { Component } from 'react';

export default class StorySearch extends Component {
    constructor(props){
        super(props)

        this.state={
                storiesToDisplay: []
        }
    }

    
    changeSearch(option, value) {
        this.setState({
            [option]: value
        }, () => console.log('state', this.state))

    }

    searchByName(){
        
    }

    render () {
        return (
            <div>
                Search Stories:
                <input onChange={(e) => this.changeSearch(e.target.name, e.target.value)} name="searchByName" type="text" />
                <button onClick={this.searchByName(this.state.searchByName)}>search</button>


                <select className="select-box" name="class" onChange={(e) => this.changeChar(e.target.name, e.target.value)}>
                            <option value="Choose Your Class" selected default disabled>Choose Your Class</option>
                            {this.state.classes.map((charClass, i) => {
                                return <option key={i} value={charClass.class_id}>{charClass.class_name}</option>
                            })}

                        </select>

            </div>
            
        );
    }
}