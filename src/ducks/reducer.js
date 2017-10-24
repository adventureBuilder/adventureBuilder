
import axios from 'axios';

// default state
const initialState = {
    user: { username:'' },
    selectedCharacter: { "character_id": 1, "character_name": "HarrisonFord", "gender": "female", "dexterity": 1, "strength": 2, "charisma": 6, "health_points": 19, "alive": 1, "class_id": 1, "user_id": 1, "class_name": "test", "base_dexterity": 0, "base_strength": 0, "base_charisma": 5, "male_class_img": "http://placekitten.com/234/232", "female_class_img": "http://placekitten.com/234/232", "start_health_points": 18 },
    selectedCharacterHP: null,
    selectedCharacterAliveOrDead: null,
    characters: []
};


// Actions
// const ActionName = 'Resource/ActionName';
const GET_USER = 'GET_USER';

const UPDATE_USER = 'UPDATE_USER';

const GET_CHARACTERS = 'GET_CHARACTERS';

const GET_SELECTED_CHARACTER = 'GET_SELECTED_CHARACTER';

const CHANGE_HEALTH_POINTS = 'CHANGE_HEALTH_POINTS';



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

export function changeHP(character_id,old_health_points,new_points){
 var health_points = old_health_points + new_points;
 return{
        type: CHANGE_HEALTH_POINTS,
        payload: axios.post(`/api/character/changeHP`,{health_points: health_points, character_id: character_id})
        .then(res=>{
            return res.data
        })
        .catch(err=>console.log(err, 'error from get changeHP axios function'))
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

        case CHANGE_HEALTH_POINTS + '_FULFILLED':
         return Object.assign({}, state, {selectedCharacterHP: action.payload.health_points, selectedCharacterAliveOrDead: action.payload.alive});
        

        default: return state;


    }
};

