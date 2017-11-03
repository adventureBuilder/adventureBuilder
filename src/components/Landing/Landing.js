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
                    

                    
                </div>
                <Footer />
            </div>
            
        );
    }
}

