import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;

class Sidebar extends Component {
    render() {
        return (
            <Sider>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span>文章管理</span>
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