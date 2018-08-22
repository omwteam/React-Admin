import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeCrumbs} from '@/store/sider/action'
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
        path: '/home/category',
        title: '分类管理',
        icon: 'folder-open'
    },{
        path: '/home/tags',
        title: '标签管理',
        icon: 'tags-o'
    },
]


class Sidebar extends Component {
    render() {
        const MenuList = menus.map((item) => {
            return (
                <Menu.Item key={item.path}>
                    <Link to={item.path} onClick={() => {this.props.changeCrumbs(item.title)}}>
                        <Icon type={item.icon}/>
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        })
        return (
            <Sider collapsed={this.props.sider.collapsed}>
                <div className="logo"><Icon type="global"/>{this.props.sider.collapsed?'':' React'}</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home/article']}>
                    {MenuList}
                </Menu>
            </Sider>
        )
    }
}

export default connect(state=>({sider: state.sider}),{changeCrumbs})(Sidebar);