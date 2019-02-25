import React, { Component } from 'react'
import Header from './Header';

export default class Upload extends Component {
  render() {
    return (
      <div className="upload">
        <Header />

        <h1 className="upload__header">Upload Video</h1>

        <div className="upload__container">
          <div className="upload__left">
            <span className="upload__left--title">VIDEO THUMBNAIL</span>
            <img src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="upload__left--image" alt="bike" />
          </div>

          <div className="upload__right">
            <form className="upload__form" >
              <label htmlFor="title" className="upload__right--label">TITLE YOUR VIDEO</label>
              <input type="text" placeholder="Add a title to your video" id="title" className="upload__form--title" />

              <label htmlFor="title" className="upload__right--label">TITLE YOUR VIDEO</label>
              <textarea name="" id="" cols="30" rows="10" className="upload__form--description" placeholder="Add a description of your video"></textarea>

              <div className="upload__form--line"></div>
              <button type="submit" className="upload__form--publish">PUBLISH</button>
              <button type="submit" className="upload__form--cancel">CANCEL</button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}
