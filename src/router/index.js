import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import ArticleList from '@/pages/article/article.js';
import ArticleCreate from '@/pages/article/create.js';

const dashboard = () => <div>dashboard</div>

class HomeRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/home/dashboard" component={dashboard}/>
                <Route exact path="/home/article" component={ArticleList}/>
                <Route exact path="/home/article/create" component={ArticleCreate}/>
            </Switch>
        )
    }
}

export default HomeRoutes;