import React, {Component} from 'react';
import {Input,Select,DatePicker,Row,Col} from 'antd';
import Editor from '@/components/editor/editor.js';
import moment from 'moment'
import './article.css';

const Option = Select.Option;

class CreateArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            article: {
                title: '',
                cate: 'yiminghe',
                tags: '',
                created_time: new Date(),
                content: '## 哈哈哈',
                banner: ''
            }

        }
    }
    render() {
        return (
            <div>
                <Row gutter={20} className="mgb20">
                    <Col span={12}>
                        <Input className="form-title" value={this.state.article.title} placeholder="文章标题"/>
                    </Col>
                    <Col span={6}>
                        <Select className="form-cate" defaultValue={this.state.article.cate}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                </Row>
                <Row gutter={20} className="mgb20">
                    <Col span={12}>
                        <Input className="form-tag" value={this.state.article.tags} placeholder="标签，空格隔开"/>
                    </Col>
                    <Col span={6}>
                        <DatePicker defaultValue={moment(this.state.article.created_time)} placeholder="发布日期"/>
                    </Col>
                </Row>
                <Editor value={this.state.article.content}/>
            </div>
        )
    }
}

export default CreateArticle;