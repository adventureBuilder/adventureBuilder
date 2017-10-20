// Displays user name input the first time a user logs in
// Used by Tavern Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getUser, updateUser } from '../../../ducks/reducer';


class NewUser extends Component {

    constructor() {
        super();

        this.state = {

            username: ''

        }
        this.usernameChange = this.usernameChange.bind(this);
        this.usernameClick = this.usernameClick.bind(this);
    }

    usernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    usernameClick(username) {
        this.props.updateUser(username)
            
        
    }

    render() {
        return (
            <div className="newuser"> {console.log('state:', this.props.state)}
                { this.props.username ? <h3>Welcome {this.props.username}</h3> : (<div>
                    <h3>User Name:</h3>
                    <p><input type="text" onChange={(e) => this.usernameChange(e)}  placeholder="Add a username" /></p>
                    <a><button onClick={()=>this.usernameClick(this.state.username)} >Save</button></a>

                    {this.props.username}
                </div>)
                }
            </div>
        );
    }

       
}

function mapStateToProps(state) {
    return {
        username: state.user.user_name,
        state: state
    }
}

export default connect(mapStateToProps, { getUser, updateUser })(NewUser)