import Stopwatch from '../components/Stopwatch';
import * as actions from '../actions/';
import { State } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(state: State) {
    return state;
}

export function mapDispatchToProps(
    dispatch: Dispatch<actions.ToggleStopwatchAction> |
    Dispatch<actions.ResetStopwatchAction>
) {
    return {
        onToggleStopwatch: () => dispatch(actions.toggleStopwatch()),
        onResetStopwatch: () => dispatch(actions.resetStopwatch()),
    };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Stopwatch);