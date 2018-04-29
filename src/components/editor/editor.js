import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph'

class Editor extends Component{
    render(){
        return (
            <div>
                <ReactMarkdown source={input}/>
            </div>
        )
    }
}

export default Editor;