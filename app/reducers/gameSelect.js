import {SELECT_GAME} from 'actions'

const initialState = {};

export default function(state = initialState, action = {selectedGame: {}}) {
    switch(action.type) {
        case SELECT_GAME:
            return { ...action.selectedGame };
        default:
            return state;
    }
}