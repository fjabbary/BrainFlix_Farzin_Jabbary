import React, { Component } from 'react';
import './App.scss';
import CommentData from './externalData/CommentData';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';

class App extends Component {

  state = {
    commentData: CommentData
  }

  addComment = (e) => {

    const copy = Array.from(this.state.commentData.comments)
    copy.push({ comment: e.target.addComment.value })

    const newObj = { ...this.state.commentData, comments: copy };

    this.setState({
      commentData: newObj
    })

    console.log(newObj)
    e.target.addComment.value = '';
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header />
          <Hero videoImg={this.state.commentData} />
          <Content submit={this.addComment} commentData={this.state.commentData} />
        </main>
      </div>
    );
  }
}

export default App;
