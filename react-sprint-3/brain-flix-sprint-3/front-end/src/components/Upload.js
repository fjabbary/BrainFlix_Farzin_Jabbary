import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Upload extends Component {

  state = {
    title: '',
    description: ''
  }

  submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/videos', {
      title: e.target.title.value,
      description: e.target.description.value
    })

    e.target.title.value = '';
    e.target.description.value = '';
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="upload">
        <h1 className="upload__header">Upload Video</h1>

        <div className="upload__container">
          <div className="upload__left">
            <span className="upload__left--title">VIDEO THUMBNAIL</span>
            <img src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="upload__left--image" alt="bike" />
          </div>

          <div className="upload__right">
            <form className="upload__form" onSubmit={this.submitHandler}>
              <label htmlFor="title" className="upload__right--label">TITLE YOUR VIDEO</label>
              <input type="text" placeholder="Add a title to your video" id="title" className="upload__form--title" name="title" />

              <label htmlFor="title" className="upload__right--label">TITLE YOUR VIDEO</label>
              <textarea name="description" id="" cols="30" rows="10" className="upload__form--description" placeholder="Add a description of your video"></textarea>

              <div className="upload__form--line"></div>
              <button type="submit" className="upload__form--publish">PUBLISH</button>

              <Link to={"/"}>
                <button className="upload__form--cancel">CANCEL</button>
              </Link>
            </form>
          </div>
        </div>

      </div>
    )
  }
}
