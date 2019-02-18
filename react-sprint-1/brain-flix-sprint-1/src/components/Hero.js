import React, { Component } from 'react'

export default class Hero extends Component {


  render() {
    const videoIamge = this.props.videoImg;

    return (
      <div>
        <section className="hero">
          <div className="hero__content">
            <video src="" poster={videoIamge.image} className="hero__content--main"></video>
          </div>
          <div className="hero__controls">
            <span className="hero__controls--play"></span>
            <span className="hero__controls--indicator"></span>
            <span className="hero__controls--fullScreen"></span>
            <span className="hero__controls--volume"></span>
          </div>
        </section>
      </div>
    )
  }
}
