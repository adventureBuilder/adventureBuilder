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
                <h2 className="down-arrow">Landing</h2>
                <div className="page">
                    Login button uncomment when we are ready for stuff and things
                {/* <a href={process.env.REACT_APP_LOGIN}>
                        <button>Login</button>
                    </a> */}

                    <h3>Temporary Navigation</h3>
                    <Link to="/tavern">Tavern View</Link><br/>
                    <Link to="/newcharacter">New Character View</Link><br/>
                    <Link to='/storyselection'>Story Search View</Link><br/>
                    <Link to="/cemetary">Cemetary View</Link><br/>
                </div>
                <Footer />
            </div>
            
        );
    }
}

