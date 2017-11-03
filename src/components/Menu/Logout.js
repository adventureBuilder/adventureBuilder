import React, { Component } from 'react';
import { connect } from 'react-redux'

export default function Logout() {

    return (
        <div className='btn'>
            <a className='link' href={process.env.REACT_APP_LOGOUT}>Logout</a>

        </div>
    );
}
