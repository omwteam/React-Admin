import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './App.js';
import {Provider} from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import './style/common.css'

ReactDOM.render(
    <Provider store={store}>
        <AppRoute/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
