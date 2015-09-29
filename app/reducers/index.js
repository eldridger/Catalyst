import * as ActionTypes from 'actions';
import merge from 'lodash/object/merge';
import selectedGame from './gameSelect';
import { routerStateReducer } from 'redux-react-router';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    selectedGame,
    router: routerStateReducer
});

export default rootReducer;