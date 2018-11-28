import React, { Component } from 'react'
import YouTube from 'react-youtube'

// link directly from video https://youtu.be/_nBlN9yp9R8
// link from url https://www.youtube.com/watch?v=_nBlN9yp9R8

class ReactYouTubeExample extends Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt(50);
        console.log("EEEEEEEVENT", event.target)
      }
    videoOnPlay (event) {
        //access to player in all event handlers via event.target
        const player = event.target;
        console.log("LOOOOOOOOOOOGGGGGGG", player.getCurrentTime())
    }
    videoStateChange(event) {
        const player = event.target;
        console.log("LOOOOOOOOOOOGGGGGGG", player.getCurrentTime())
    }
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
     const { videoId } = this.props;
        return (
          <YouTube
            videoId= {videoId}
            opts={opts}
            onReady={this.videoOnReady}
            onPlay = {this.videoOnPlay}
            onStateChange = {this.videoStateChange}
          />
        );
      }
     
      
    // render () {
    //     return (
    //         <div>
    //             <h1>Hello World</h1>
    //         </div>
    //     )
    // }
}

export default ReactYouTubeExample;