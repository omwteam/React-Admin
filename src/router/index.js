import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import home from '../pages/home/home.js';
import login from '../pages/login/login.js';

class RouteConfig extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact  path="/" component={home}></Route>
                    <Route path="/login" component={login}></Route>
                </Switch>
            </Router>
        )
    }
}


export default RouteConfig;