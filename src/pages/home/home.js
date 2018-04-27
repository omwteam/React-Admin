import React, {Component} from 'react';
import {Layout} from 'antd';
import './home.css';
import HomeHeader from '@/components/header/header.js';
import Sidebar from '@/components/sidebar/sidebar.js';
const {Content} = Layout;

class Home extends Component {
    state = {
        collapsed: false
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Layout className="wrapper">
                <Sidebar/>
                <Layout>
                    <HomeHeader/>
                    <Content
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff'
                    }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;