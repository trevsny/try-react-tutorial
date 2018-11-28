import React, {Component} from 'react'
// const React = require('react')
// const ReactMarkdown = require('react-markdown')
import ReactMarkdown from 'react-markdown'

class ReactMarkdownExample extends Component {
    render(){
        const {input} = this.props;
        return (
            <ReactMarkdown source={input} />
            // <h1>Howdy World</h1>
        )
    
    }
}

export default ReactMarkdownExample;
