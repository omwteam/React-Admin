import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;

class Sidebar extends Component {
    render() {
        return (
            <Sider>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/article']}>
                    <Menu.Item key="/dashboard">
                        <Link to="/dashboard">
                            <Icon type="video-camera"/>
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/article">
                        <Link to="/article">
                            <Icon type="video-camera"/>
                            <span>文章列表</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span>分类管理</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload"/>
                        <span>标签管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar;