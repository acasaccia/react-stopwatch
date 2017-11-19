import * as constants from '../constants';

export interface ToggleStopwatch {
    type: constants.TOGGLE_STOPWATCH;
}

export type ToggleStopwatchAction = ToggleStopwatch;

export function toggleStopwatch(): ToggleStopwatch {
    return {
        type: constants.TOGGLE_STOPWATCH
    };
}

export interface ResetStopwatch {
    type: constants.RESET_STOPWATCH;
}

export type ResetStopwatchAction = ResetStopwatch;

export function resetStopwatch(): ResetStopwatch {
    return {
        type: constants.RESET_STOPWATCH
    };
}