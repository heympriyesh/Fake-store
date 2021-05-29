import { combineReducers } from 'redux';

import addDataReducer from './addDataReducer';
import fetchDataReducer from './fetchDataReducer';

const allReducers = combineReducers({
    fetchDataReducer,
    addDataReducer
})
export default allReducers;