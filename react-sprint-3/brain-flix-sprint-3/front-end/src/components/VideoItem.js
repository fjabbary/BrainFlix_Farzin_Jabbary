import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VideoItem extends Component {
  render() {
    const allVideos = this.props.allVideos;
    const id = this.props.id;
    let maxLength = 30;

    return (
      <Link to={`/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
        <div >
          <div className="content__videoList--item">
            <div className="content__videoList--left">
              <img src={allVideos.image} alt="video" />
            </div>
            <div className="content__videoList--right">
              <h4>{allVideos.title.length > maxLength ? allVideos.title.substring(0, maxLength) + '...' : allVideos.title}</h4>
              <p>{allVideos.channel}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
