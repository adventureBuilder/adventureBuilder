// Displays user name input the first time a user logs in
// Used by Tavern Component
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser, updateUser } from '../../../ducks/reducer';


class NewUser extends Component {

    constructor(props) {
        super(props);

        this.state = {

            username: ""

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
            <div className="new-user"> {console.log('state:', this.props.state)}
                 { !this.props.username && ( 
                <div className="block-card">
                    <h2 className="sub-title">Set Your Author Name</h2>
                    <div className="block-card-inner">
                        <p><input className="base-input" type="text" onChange={(e) => this.usernameChange(e)} placeholder="Author Name" /></p>
                        <p><a><button className="btn" onClick={() => this.usernameClick(this.state.username)} >Save</button></a></p>

                        {this.props.username}
                    </div>

                </div>
                 )}
            </div>
            // <h3 className="mobile-pad white">Welcome {this.props.username}</h3>
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