import {createStore} from 'redux';
import reducer from './ducks/reducer';

let store = createStore(reducer);

export default store;