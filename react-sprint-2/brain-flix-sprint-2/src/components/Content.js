import React, { Component } from "react";
import Descriptions from "./Description";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import VideoList from "./VideoList";

export default class Content extends Component {
  render() {
    const submit = this.props.submit;
    const commentData = this.props.commentData;
    const commentsArr = this.props.commentData.comments;

    const commentJSX = commentsArr.map((commentObj, index) => {
      return (
        <Comments
          allComments={commentObj}
          key={index}
          id={commentObj.id}
          removeComment={this.props.removeComment.bind(this, commentObj.id)}
        />
      );
    });

    return (
      <section className="content">
        <div className="content__text">
          <Descriptions commentData={commentData} />
          <CommentInput submit={submit} commentData={commentData} />
          {commentJSX}
        </div>
        <VideoList video={this.props.video} idParam={this.props.idParam} />
      </section>
    );
  }
}
