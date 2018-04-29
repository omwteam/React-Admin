import React, {Component} from 'react';
import {Input, Select, DatePicker} from 'antd';
import Editor from '@/components/editor/editor.js';

const Option = Select.Option;

class CreateArticle extends Component {
    render() {
        return (
            <div>
                <Input placeholder="文章标题"/>
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <DatePicker/>
                <Input placeholder="标签，空格隔开"/>
                <Editor/>
            </div>
        )
    }
}

export default CreateArticle;