import React, { Component } from 'react';
// import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';
import 'font-awesome/css/font-awesome.css';

class Editor extends Component{
    state = {
        textValue: '## 哈哈哈',
        options: {
            autoDownloadFontAwesome: false
        }
    }
    render(){
        return (
            <div>
                <SimpleMDE label="Your label" value={this.state.textValue} options={this.state.options}/>
            </div>
        )
    }
}

export default Editor;