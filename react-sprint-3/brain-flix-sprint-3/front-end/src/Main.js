import React, { Component } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Content from "./components/Content";
import axios from 'axios';

class Main extends Component {
  state = {
    commentData: {}
  };

  componentDidMount() {
    axios.get('http://localhost:8080/videos/1af0jruup5gu').then(res => {
      this.setState({
        commentData: res.data
      })
    })
  }

  componentDidUpdate = () => {
    let id = this.props.match.params.id
    let url = `http://localhost:8080/videos/${id}`;

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
    let videoId = this.props.match.params.id;
    let getUrl = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=farzinjabbary`
    axios({
      method: 'DELETE',
      url: `https://project-2-api.herokuapp.com/videos/${videoId}/comments/${id}?api_key=farzinjabbary`
    })
      .then(res => {
        axios.get(getUrl).then(result => {
          this.setState({
            commentData: result.data
          })
        })
      }
      )
  };

  //Updates the like count, but for some reason it it functioning properly and it affects the functionality of website
  likeHandler = () => {
    let videoId = this.props.match.params.id;
    const putUrl = `http://localhost:8080/videos/${videoId}/likes?api_key=farzinjabbary`;
    const getUrl = `http://localhost:8080/videos/${videoId}/?api_key=farzinjabbary`


    axios({
      method: "PUT",
      url: putUrl,
      data: {
        id: videoId,
        likes: this.state.commentData.likes
      }
    }).then(

      axios.get(getUrl).then(res => {
        this.setState({
          commentData: { ...this.state.commentData, likes: res.data.likes }
        })
      }))

  }


  render() {
    return (
      <div className="App">
        <main>
          <Hero videoImg={this.state.commentData} />
          <Content
            submit={this.addComment}
            commentData={this.state.commentData}
            removeComment={this.removeComment}
            video={this.videoHandler}
            idParam={this.props.match.params.id}
            like={this.likeHandler}
          />
        </main>
      </div>
    );
  }
}

export default Main;
