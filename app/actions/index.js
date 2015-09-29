import { CALL_API, Schemas } from 'middleware/api';

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    };
}

export const SELECT_GAME = 'SELECT_GAME';
export function selectGame(gameKey) {
    return (dispatch, getState) =>
        dispatch({
            type: SELECT_GAME,
            selectedGame: gameKey
        });
}