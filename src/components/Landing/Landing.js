// Displays game description text and "log in" button


import React, { Component } from 'react';

import Menu from './../Menu/Menu';
import Footer from './../Menu/Footer';

export default class Landing extends Component {
    render () {
        return (
            <div className="landing">
                <Menu />
                <h2 className="down-arrow">Landing</h2>
                Login button uncomment when we are ready for stuff and things
                {/* <a href={process.env.REACT_APP_LOGIN}>
                        <button>Login</button>
                    </a> */}
                <Footer />
            </div>
            
        );
    }
}

