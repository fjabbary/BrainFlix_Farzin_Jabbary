import React, { Component } from "react";

export default class CommentInput extends Component {
  render() {
    const submit = this.props.submit;

    return (
      <div className="content__text--commentInput">
        <img src="./assets/Images/Mohan-muruge.jpg" alt="" />
        <form onSubmit={submit}>
          <label>JOIN THE CONVERSATION</label>
          <input
            required
            name="addComment"
            type="text"
            placeholder="Add comment"
          />
          <button>COMMENT</button>
        </form>
      </div>
    );
  }
}
