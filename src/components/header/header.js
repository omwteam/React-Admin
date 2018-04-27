import React, {Component} from 'react';
import {Layout, Icon} from 'antd';
import './header.css';
const {Header} = Layout;

class HomeHeader extends Component {
    render() {
        return (
            <Header className="header">
                <Icon className="trigger" type="menu-unfold"/>
            </Header>
        )
    }
}

export default HomeHeader;