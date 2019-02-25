import React, { Component } from "react";
import "./App.scss";
import CommentData from "./externalData/CommentData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import uuid from "uuid";

class App extends Component {
  state = {
    commentData: CommentData
  };

  addComment = e => {
    const copy = Array.from(this.state.commentData.comments);
    copy.push({ id: uuid(), comment: e.target.addComment.value });

    const newObj = { ...this.state.commentData, comments: copy };

    this.setState({
      commentData: newObj
    });

    e.target.addComment.value = "";
    e.preventDefault();
  };

  removeComment = id => {
    console.log(id);
    const commentsArr = this.state.commentData.comments;
    const newComments = commentsArr.filter(oneComment => {
      return oneComment.id !== id;
    });

    const newObject = { ...this.state.commentData, comments: newComments };

    this.setState({
      commentData: newObject
    });
  };

  render() {
    return (
      <Router></Router>
      <div className="App">
        <main>

          <Header />
          <Hero videoImg={this.state.commentData} />
          <Content
            submit={this.addComment}
            commentData={this.state.commentData}
            removeComment={this.removeComment}
          />
        </main>
      </div>
    );
  }
}

export default App;
