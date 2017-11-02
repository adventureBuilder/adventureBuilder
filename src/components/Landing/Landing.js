// Displays game description text and "log in" button
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './../Menu/Menu';
import Footer from './../Menu/Footer';

export default class Landing extends Component {
    render () {
        return (
            <div className="landing">
                <Menu />
                
                <div className="page">
                    Login button uncomment when we are ready for stuff and things
                 <a href={process.env.REACT_APP_LOGIN}>
                        <button>Login</button>
                    </a> 

                    
                </div>
                <Footer />
            </div>
            
        );
    }
}

