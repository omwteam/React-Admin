import React, { Component } from 'react';
// import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';
import 'font-awesome/css/font-awesome.css';

class Editor extends Component{
    constructor(props){
        super(props);
        this.state = {
            textValue: this.props.value,
            options: {
                autoDownloadFontAwesome: false
            }
        }
    }
    render(){
        return (
            <div>
                <SimpleMDE value={this.state.textValue} options={this.state.options}/>
            </div>
        )
    }
}

export default Editor;