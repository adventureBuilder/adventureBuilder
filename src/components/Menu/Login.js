import React, { Component } from 'react';
import { connect } from 'react-redux'

export default function Login() {

    return (
        <div className='btn'>
            <a className='link' href={process.env.REACT_APP_LOGIN}>Login</a>

        </div>
    );
}