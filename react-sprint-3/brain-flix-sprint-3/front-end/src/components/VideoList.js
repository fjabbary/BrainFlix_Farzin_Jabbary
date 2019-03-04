import React, { Component } from 'react';
import VideoItem from './VideoItem';
import axios from 'axios';

export default class VideoList extends Component {
  url = 'http://localhost:8080/videos';

  state = {
    videoData: []
  }

  componentDidMount() {
    axios.get(this.url).then(res => {
      this.setState({
        videoData: res.data
      })
    })
  }

  componentDidUpdate() {
    axios.get(this.url).then(res => {
      this.setState({
        videoData: res.data
      })
    })
  }

  render() {
    let id = this.props.idParam

    const filteredVideos = this.state.videoData.filter(item => {
      return item.id !== id;
    })

    const videoJSX = filteredVideos.map(videoObj => {
      return <VideoItem allVideos={videoObj} key={videoObj.id} video={this.props.video} id={videoObj.id} />
    })

    return (
      <div className="content__videoList">
        <h4 className="content__videoList--header">NEXT VIDEO</h4>
        {videoJSX}
      </div>
    )
  }
}
