import React, { Component } from 'react';
import { connect } from 'react-redux'

export default function Logout() {

    return (
        <div>
            <a className='nav-item' href={process.env.REACT_APP_LOGOUT}>Logout</a>
        </div>
    );
}
