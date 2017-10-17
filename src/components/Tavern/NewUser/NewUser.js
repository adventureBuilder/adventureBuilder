// Displays user name input the first time a user logs in
// Used by Tavern Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getUser, usernameToStore } from '../../../ducks/reducer';


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
    usernameClick() {
        usernameToStore(this.state.username);

        // axios.put("http://localhost:4000/api/updateUser", {
        //     userId: this.props.user.userId,
        //     username: this.state.username
        // }).then(response => { })
        console.log(this.props.user)
    }

    render() {
        return (
            <div> {console.log('props.user',this.props.user)}
                    {console.log('state.username',this.state.username)}
                { this.props.user.username ? <h3>Welcome {this.props.user.username}</h3> : (<div>
                    <h3>User Name:</h3>
                    <p><input type="text" onChange={(e) => this.usernameChange(e)}  placeholder="Add a username" /></p>
                    <a><button onClick={this.usernameClick} >Save</button></a>

                    {this.props.user.username}
                </div>)
                }
            </div>
        );
    }

       
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser, usernameToStore })(NewUser)