import React, { Component } from 'react'

export default class VideoItem extends Component {
  render() {
    const allVideos = this.props.allVideos;

    return (
      <div>
        <div className="content__videoList--item">
          <div className="content__videoList--left">
            <img src={allVideos.image} alt="video" />
          </div>
          <div className="content__videoList--right">
            <h4>{allVideos.title}</h4>
            <p>{allVideos.channel}</p>
          </div>
        </div>
      </div>
    )
  }
}
