import React, { Component } from 'react'

export default class Comments extends Component {

  render() {

    const comments = this.props.allComments;

    const now = new Date();
    const nowTimestamp = now.getTime();
    const timeDiff = (nowTimestamp - comments.timestamp) / 1000;
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

    return (
      <div className="comment__content">
        <div className="comment__content--left">
          <span className="comment__content--imageSpan"></span>
        </div>
        <div className="comment__content--right">
          <span className="comment__content--name">{comments.name}</span>
          <span className="comment__content--date">{showTime}</span>
          <p className="comment__content--text">{comments.comment}</p>
        </div>
      </div>
    )
  }
}
