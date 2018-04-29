import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import './sidebar.css';
const {Sider} = Layout;

const menus = [
    {
        path: '/home/dashboard',
        title: 'Dashboard',
        icon: 'dashboard'
    },{
        path: '/home/article',
        title: '文章列表',
        icon: 'profile'
    },{
        path: '/home/cates',
        title: '分类管理',
        icon: 'folder-open'
    },{
        path: '/home/tags',
        title: '标签管理',
        icon: 'tags-o'
    },
]
const MenuList = menus.map((item) => {
    return (
        <Menu.Item key={item.path}>
            <Link to={item.path}>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
            </Link>
        </Menu.Item>
    )
})

class Sidebar extends Component {
    
    render() {
        return (
            <Sider>
                <div className="logo"><Icon type="global"/> React</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home/article']}>
                    {MenuList}
                    {/* <Menu.Item key="/dashboard">
                        <Link to="/dashboard">
                            <Icon type="dashboard"/>
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/article">
                        <Link to="/article">
                            <Icon type="profile"/>
                            <span>文章列表</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="folder-open"/>
                        <span>分类管理</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="tags-o"/>
                        <span>标签管理</span>
                    </Menu.Item> */}
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar;