import React, { Component } from 'react'
import Descriptions from './Description';
import CommentInput from './CommentInput';
import Comments from './Comments';
import VideoList from './VideoList';

export default class Content extends Component {
  render() {

    const submit = this.props.submit;

    const commentData = this.props.commentData;
    const commentsArr = this.props.commentData.comments;

    const commentJSX = commentsArr.map(commentObj => {
      return <Comments allComments={commentObj} key={commentObj.id} />
    })

    return (
      <section className="content">
        <div className="content__text">
          <Descriptions commentData={commentData} />
          <CommentInput submit={submit} commentData={commentData} />
          {commentJSX}
        </div>
        <VideoList />
      </section>
    )
  }
}





