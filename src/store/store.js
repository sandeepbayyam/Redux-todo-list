import reducer from './reducer';
import {createStore } from 'redux';
const store = new createStore(reducer);
export default store;