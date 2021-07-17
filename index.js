import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './assets/store-reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

const appRedux = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('projectThree', () => appRedux);