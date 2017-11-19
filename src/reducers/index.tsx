import { ResetStopwatchAction, ToggleStopwatchAction } from '../actions';
import { State } from '../types/index';
import { TOGGLE_STOPWATCH, RESET_STOPWATCH } from '../constants/index';

export function stopwatch(state: State, action: ToggleStopwatchAction | ResetStopwatchAction): State {
    let now = new Date();
    switch (action.type) {
        case TOGGLE_STOPWATCH:
            return {
                ...state,
                start: state.start ?
                    undefined :
                    now,
                accumulator: state.start ?
                    state.accumulator + (now.getTime() - state.start.getTime()) :
                    state.accumulator
            };
        case RESET_STOPWATCH:
            return { ...state, start: state.start ? now : undefined , accumulator: 0 };
        default:
            return state;
    }
}