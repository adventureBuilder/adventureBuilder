import React, { Component } from 'react';
import { connect } from 'react-redux'

export default function Login() {

    return (
        <div>
            <a className='nav-item' href={process.env.REACT_APP_LOGIN}>Login</a>
        </div>
    );
}