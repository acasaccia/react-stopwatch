import * as React from 'react';
import './Stopwatch.css';

export interface Props {
    start?: Date; // If the timer is currently running, represents the last time it was started, undefined otherwise
    accumulator: number; // The value stored from previous start / stops in milliseconds
    onToggleStopwatch: () => void;
    onResetStopwatch: () => void;
}

export interface State {
    tick: number;
}

const FRAME_TIME = 16.666666666666666666666666666667; // 60 FPS

class Stopwatch extends React.Component<Props, State> {

    private intervalId: number;

    constructor(props: Props) {
        super(props);
        this.state = { tick: 0 };
    }

    componentDidMount() {
        let onFrame = () => {
            if (this.props.start) {
                // Increment the tick state property to trigger a render
                this.setState({
                    tick: this.state.tick + 1
                });
            }
        };
        this.intervalId = window.setInterval(onFrame, FRAME_TIME);
    }

    componentWillUnmount() {
        window.clearInterval(this.intervalId);
    }

    /**
     * Returns a string for the stopwatch display in the format [mm:ss,SS], formatting the accumulator time interval in
     * milliseconds and adding the elapsed time if the timer is currently running.
     * @returns {String}
     */
    getDisplayTime(): String {
        let time = this.props.accumulator;
        if (this.props.start) {
            // If the timer is running, add the elapsed time to the accumulator
            let currentTime = new Date().getTime();
            let startTime = this.props.start.getTime();
            time += currentTime - startTime;
        }
        let datetime = new Date(time);
        return this.leftPad('00', datetime.getMinutes()) + ':' +
            this.leftPad('00', datetime.getSeconds()) + ',' +
            this.leftPad('00', Math.floor(datetime.getMilliseconds() / 10));
    }

    render() {
        return (
            <div className="stopwatch">
                <div className="stopwatch-display">{this.getDisplayTime()}</div>
                <div className="stopwatch-controls">
                    <button
                        onMouseDown={this.props.onResetStopwatch}
                        className="stopwatch-button stopwatch-button__reset"
                    >
                        Reset
                    </button>
                    <button
                        onMouseDown={this.props.onToggleStopwatch}
                        className={'stopwatch-button ' + (
                            this.props.start ? 'stopwatch-button__stop' : 'stopwatch-button__start'
                        )}
                    >
                        {this.props.start ? 'Stop' : 'Start'}
                    </button>
                </div>
            </div>
        );
    }

    /**
     * Pads the given number to the left using paddingValue string if the number of digits in value is less than the
     * paddingValue string length.
     * For example: leftPad('12345', 66) === '12366'
     * Note that it will truncate value if it doesn't fit into the paddingValue (the number of digits in value is
     * greater than the paddingValue string length).
     * @param {String} paddingValue
     * @param {Number} value
     * @returns {String}
     */
    private leftPad(paddingValue: String, value: Number): String {
        return String(paddingValue + value.toString()).slice(-paddingValue.length);
    }

}

export default Stopwatch;