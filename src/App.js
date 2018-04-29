import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import home from './pages/home/home.js';
import login from './pages/login/login.js';

class AppRoute extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={home}/>
                    <Route path="/login" component={login}/>
                </Switch>
            </Router>
        )
    }
}


export default AppRoute;