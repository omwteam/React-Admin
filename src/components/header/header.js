import React, {Component} from 'react';
import {Layout, Icon, Breadcrumb} from 'antd';
import {connect} from 'react-redux';
import {collapse} from '@/store/sider/action'
import './header.css';
const {Header} = Layout;

class HomeHeader extends Component {
    triggerHandle = ()=>{
        this.props.collapse();
    }
    render() {
        return (
            <Header className="header">
                <div className="header-trigger" onClick={this.triggerHandle}>
                    <Icon type={this.props.sider.collapsed?'menu-unfold':'menu-fold'}/>
                </div>
                
                <Breadcrumb className="header-breadcrumb">
                    <Breadcrumb.Item>
                        <span>{this.props.sider.crumb}</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Header>
        )
    }
}

export default connect(state=>({sider: state.sider}),{collapse})(HomeHeader);