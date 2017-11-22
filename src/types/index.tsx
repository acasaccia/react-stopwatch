export interface State {
    start?: Date; // If the timer is currently running, this represents the last time it was started.
                  // undefined otherwise
    accumulator: number; // The value stored from previous start / stops in milliseconds
}