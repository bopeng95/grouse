import { combineReducers } from 'redux';
import msgReducer from './msgReducer';

const reducers = combineReducers({
    messages: msgReducer,
});

export default reducers;