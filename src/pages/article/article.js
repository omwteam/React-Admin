import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table, Divider, Button} from 'antd';
import './article.css';

const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        render: text => <a>{text}</a>
    }, {
        title: '分类',
        dataIndex: 'cate',
        key: 'cate'
    }, {
        title: '发布时间',
        dataIndex: 'time',
        key: 'time'
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button size="small">编辑</Button>
                <Divider type="vertical"/>
                <Button type="danger" size="small">删除</Button>
            </span>
        )
    }
];

const data = [
    {
        key: '1',
        title: 'Koa2 之文件上传下载',
        cate: 'Node.js',
        time: '2018-03-28 16:43:25'
    }, {
        key: '2',
        title: 'Parcel：常见技术栈的集成方式',
        cate: '前端工具',
        time: '2018-03-27 12:41:28'
    }, {
        key: '3',
        title: 'HTML5 桌面通知：Notification API',
        cate: 'HTML5',
        time: '2018-03-26 09:43:15'
    }
];

class ArticleList extends Component {
    render() {
        return (
            <div>
                <div className="article-handle">
                <Link to="/home/article/create">
                    <Button type="primary" icon="plus">新增文章</Button>
                </Link>
                </div>
                <Table columns={columns} dataSource={data}/>
            </div>
        )
    }
}

export default ArticleList;