import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './App.js';
import registerServiceWorker from './registerServiceWorker';
import './style/common.css'

ReactDOM.render(
    <AppRoute/>, document.getElementById('root'));
registerServiceWorker();
