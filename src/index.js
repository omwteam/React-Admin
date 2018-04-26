import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index.js';
import registerServiceWorker from './registerServiceWorker';
import './style/common.css'

ReactDOM.render(
    <Route/>, document.getElementById('root'));
registerServiceWorker();
