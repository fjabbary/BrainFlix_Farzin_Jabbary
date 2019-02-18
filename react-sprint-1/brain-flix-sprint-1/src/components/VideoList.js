import React, { Component } from 'react';
import VideoData from '../externalData/VideoData'
import VideoItem from './VideoItem';

export default class VideoList extends Component {

  state = {
    videoData: VideoData
  }

  render() {

    const videoJSX = this.state.videoData.map((videoObj) => {
      return <VideoItem allVideos={videoObj} key={videoObj.id} />
    })

    return (
      <div className="content__videoList">
        <h4 className="content__videoList--header">NEXT VIDEO</h4>

        {videoJSX}
      </div>
    )
  }
}
