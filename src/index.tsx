import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { stopwatch } from './reducers/index';
import { State } from './types/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<State>(stopwatch, { accumulator: 0 }, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
