import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import axios from 'axios';

class Main extends Component {
  state = {
    commentData: {}
  };

  componentDidMount() {

    axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=farzinjabbary').then(res => {
      this.setState({
        commentData: res.data
      })
    })
  }

  componentDidUpdate = () => {
    let id = this.props.match.params.id
    let url = `https://project-2-api.herokuapp.com/videos/${id}?api_key=farzinjabbary`;

    if (this.state.commentData.id !== id) {
      axios.get(url).then(res => {
        this.setState({
          commentData: res.data
        })
      })
    }
  }

  addComment = e => {
    //Since there is not input field for the name, name was hard coded
    const newComment = { name: 'New Person', comment: e.target.addComment.value }

    let videoId = this.props.match.params.id;
    const postUrl = `https://project-2-api.herokuapp.com/videos/${videoId}/comments?api_key=farzinjabbary`;

    axios({
      method: 'POST',
      url: postUrl,
      data: newComment,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      const copy = Array.from(this.state.commentData.comments)
      copy.push(res.data)
      this.setState({
        commentData: { ...this.state.commentData, comments: copy }
      })
    }
    )
    e.target.addComment.value = "";
    e.preventDefault();
  };

  removeComment = id => {
    console.log(id);

    let videoId = this.props.match.params.id;
    let getUrl = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=farzinjabbary`
    axios({
      method: 'DELETE',
      url: `https://project-2-api.herokuapp.com/videos/${videoId}/comments/${id}?api_key=farzinjabbary`
    })
      .then(res => {
        console.log(res.data)
        axios.get(getUrl).then(result => {
          this.setState({
            commentData: result.data
          })
        })
      }
      )
  };

  render() {
    return (
      <div className="App">
        <main>
          <Header />
          <Hero videoImg={this.state.commentData} />
          <Content
            submit={this.addComment}
            commentData={this.state.commentData}
            removeComment={this.removeComment}
            video={this.videoHandler}
            idParam={this.props.match.params.id}
          />
        </main>
      </div>
    );
  }
}

export default Main;
// this.setState({
//   commentData: { ...this.state.CommentData, comments: updatedComments }
// })