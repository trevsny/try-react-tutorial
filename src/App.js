import React, { Component } from 'react';
import './App.css';
// import PostList from './posts/PostList.js';
// import ReactYouTubeExample from './third-party/ReactYoutubeExample';
import ReactMarkdownExample from './third-party/ReactMarkdown';

class App extends Component {
  render() {
    const input = ' # [This](http://joincfe.com/youtube/) is a header\n\nAnd this is a paragraph'

      return (
        <div className = "App">
          <ReactMarkdownExample input = {input}/>
        </div>
      )
    // return (
    //   <div className="App">
    //     <ReactYouTubeExample videoId = '_nBlN9yp9R8' />
    //   </div>
    // );
  }
}

export default App;
