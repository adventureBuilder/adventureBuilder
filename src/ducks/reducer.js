import * as users from './../services/users.js';
import axios from 'axios';

// default state
const initialState = {
    user: { username:''},
    character: {},
    characters: []
};


// Actions
// const ActionName = 'Resource/ActionName';
const GET_USER = 'GET_USER';
const GET_USER_FULFILLED = 'GET_USER_FULFILLED';

const SET_USER = 'SET_USER';

const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTERS_FULFILLED = 'GET_CHARACTERS_FULFILLED';



// Action Creators
export function getUser () {
    return {
        type: GET_USER,
        payload: users.getUser()
    }
};

export function usernameToStore (username) {
    //console.log(username);
    return {
        type: SET_USER,
        payload: username
    }
};

export function getCharacters () {
    return {
        type: GET_CHARACTERS,
        payload: axios.get(`http://localhost:4000/api/getAllCharacters`)
        .then(res=>{
            console.log(res.data)
            return res.data
        })
        .catch(err=>console.log(err, 'error from get characters axios function'))
    }
}



// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
                
        case GET_USER_FULFILLED: 
        return Object.assign({}, state, {user: action.payload});

        case SET_USER: 
        console.log('action.payload', action.payload)
        return Object.assign({}, state, {user: {username: action.payload}});

        default: return state;


    }
};

