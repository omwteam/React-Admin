import React, {Component} from 'react';
import {Layout, Icon, Breadcrumb} from 'antd';
import './header.css';
const {Header} = Layout;

class HomeHeader extends Component {
    state = {
        collapse: false
    }
    triggerHandle = ()=>{
        this.setState({
            collapse: !this.state.collapse
        })
    }
    render() {
        return (
            <Header className="header">
                <div className="header-trigger" onClick={this.triggerHandle}>
                    <Icon type={this.state.collapse?'menu-unfold':'menu-fold'}/>
                </div>
                
                <Breadcrumb className="header-breadcrumb">
                    <Breadcrumb.Item>
                        <span>Dashboard</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Header>
        )
    }
}

export default HomeHeader;