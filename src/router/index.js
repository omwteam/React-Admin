import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import ArticleList from '@/pages/article/index.js';

const dashboard = () => <div>dashboard</div>

class HomeRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/dashboard" component={dashboard}/>
                <Route exact path="/article" component={ArticleList}/>
            </Switch>
        )
    }
}

export default HomeRoutes;