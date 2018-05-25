import React, {Component} from 'react';
import {Input,Select,DatePicker,Row,Col} from 'antd';
import Editor from '@/components/editor/editor.js';
import './article.css';

const Option = Select.Option;

class CreateArticle extends Component {
    render() {
        return (
            <div>
                <Row gutter={20} className="mgb20">
                    <Col span={12}>
                        <Input className="form-title" placeholder="文章标题"/>
                    </Col>
                    <Col span={6}>
                        <Select className="form-cate" defaultValue="lucy">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                </Row>
                <Row gutter={20} className="mgb20">
                    <Col span={12}>
                        <Input className="form-tag" placeholder="标签，空格隔开"/>
                    </Col>
                    <Col span={6}>
                        <DatePicker placeholder="发布日期"/>
                    </Col>
                </Row>
                <Editor value={'# haha'}/>
            </div>
        )
    }
}

export default CreateArticle;