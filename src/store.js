import {createStore, applyMiddleware} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

let store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));

export default store;