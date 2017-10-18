import * as users from './../services/users.js';
import axios from 'axios';

// default state
const initialState = {
    user: { username:'' },
    selectedCharacter: {},
    characters: []
};


// Actions
// const ActionName = 'Resource/ActionName';
const GET_USER = 'GET_USER';

const UPDATE_USER = 'UPDATE_USER';

const GET_CHARACTERS = 'GET_CHARACTERS';

const GET_SELECTED_CHARACTER = 'GET_SELECTED_CHARACTER';



// Action Creators
export function getUser () {
    return {
        type: GET_USER,
        payload: axios.get(`/api/getUser`)
        .then(res=>{
            return res.data
        })
        .catch(err=>console.log(err, 'error from get user axios function'))
    }
};

export function updateUser (userName) {
    console.log('updateUser: ', userName);
    return {
        type: UPDATE_USER,
        payload: axios.put("/api/updateUser", {
            username: userName
    }).then(res=>{
            return res.data
        })
        .catch(err=>console.log(err, 'error from update user axios function'))
    }
};

export function getCharacters () {
    return {
        type: GET_CHARACTERS,
        payload: axios.get(`/api/getAllCharacters`)
        .then(res=>{
            return res.data
        })
        .catch(err=>console.log(err, 'error from get characters axios function'))
    }
}

export function getSelectedCharacter (characterId) {
    return {
        type: GET_SELECTED_CHARACTER,
        payload: axios.get(`/api/getSelectedCharacter/${characterId}`)
        .then(res=>{
            return res.data
        })
        .catch(err=>console.log(err, 'error from get selected character axios function'))
    }
}



// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
                
        case GET_USER + '_FULFILLED': 
        return Object.assign({}, state, {user: action.payload});

        case UPDATE_USER + '_FULFILLED': 
        console.log('update user switch fired')
        return Object.assign({}, state, {user: action.payload});

        case GET_CHARACTERS + '_FULFILLED':
        return Object.assign({}, state, {characters: action.payload});

        case GET_SELECTED_CHARACTER + '_FULFILLED':
        return Object.assign({}, state, {selectedCharacter: action.payload});

        default: return state;


    }
};

