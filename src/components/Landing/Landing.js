// Displays game description text and "log in" button
// import './../../App.css';

import React, { Component } from 'react';

import Menu from './../Menu/Menu';

export default class Landing extends Component {
    render () {
        return (
            <div className="landing center bimage1">
                <Menu />
                <h2>Landing</h2>
                Login button uncomment when were ready for stuff and things
                {/* <a href={process.env.REACT_APP_LOGIN}>
                        <button>Login</button>
                    </a> */}
            </div>
            
        );
    }
}

