import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import ArticleList from '@/pages/article/article.js';
import ArticleCreate from '@/pages/article/create.js';
import CategoryList from '@/pages/category/category.js';

const dashboard = () => <div>dashboard</div>

class HomeRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/home/dashboard" component={dashboard}/>
                <Route exact path="/home/article" component={ArticleList}/>
                <Route exact path="/home/article/create" component={ArticleCreate}/>
                <Route exact path="/home/category" component={CategoryList}/>
            </Switch>
        )
    }
}

export default HomeRoutes;