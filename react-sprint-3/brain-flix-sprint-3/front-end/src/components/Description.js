import React, { Component } from 'react'

export default class Descriptions extends Component {
  render() {

    const commentData = this.props.commentData;

    const now = new Date();
    const nowTimestamp = now.getTime();
    const timeDiff = (nowTimestamp - commentData.timestamp) / 1000;
    let showTime;

    if (timeDiff < 60) {
      showTime = ' less than a minute ago';
    } else if (timeDiff > 60 && timeDiff < 3600) {
      showTime = Math.floor(timeDiff / 60) + ' minutes ago';
    } else if (timeDiff > 3600 && timeDiff < 86400) {
      showTime = Math.floor(timeDiff / 3600) + ' hours ago';
    } else if (timeDiff > 86400) {
      showTime = Math.floor(timeDiff / 86400) + ' days ago';
    }

    const like = this.props.like;

    return (
      <div>
        <div className="content__text--title">
          <h1 className="content__text--header">{commentData.title}</h1>
          <div className="content__text--details">
            <span className="content__text--name">By {commentData.channel}</span>
            <span className="content__text--date">{showTime}</span>
            <span className="content__text--view"></span>
            <span className="content__text--viewCount">{commentData.views}</span>
            <span className="content__text--like" onClick={like}></span>
            <span className="content__text--likeCount">{commentData.likes}</span>
          </div>
        </div>

        <div className="content__text--desc">
          <p>
            {commentData.description}
          </p>
          <b><span>{(commentData.comments || []).length}</span> Comment</b><br />
        </div>
      </div>
    )
  }
}