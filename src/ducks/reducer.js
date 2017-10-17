import * as users from './../services/users.js'

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
    console.log(username);
    return {
        type: SET_USER,
        payload: username
    }
};



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

