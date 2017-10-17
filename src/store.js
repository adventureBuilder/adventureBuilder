import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

let store = createStore(reducer, applyMiddleware(promiseMiddleware()));

export default store;