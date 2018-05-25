import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table, Divider, Button} from 'antd';


const columns = [
    {
        title: '分类名',
        dataIndex: 'title',
        key: 'title'
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
        title: 'Vue.js'
    }, {
        key: '2',
        title: 'React.js'
    }, {
        key: '3',
        title: 'HTML5'
    }
];

class CategoryList extends Component {
    render() {
        return (
            <div>
                <div className="article-handle">
                    <Link to="/home/article/create">
                        <Button type="primary" icon="plus">新增分类</Button>
                    </Link>
                </div>
                <Table columns={columns} dataSource={data}/>
            </div>
        )
    }
}

export default CategoryList;