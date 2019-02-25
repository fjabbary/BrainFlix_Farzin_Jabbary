import React, { Component } from 'react'

export default class Hero extends Component {

  constructor() {
    super()
    this.videoPlayer = React.createRef();

    this.state = {
      isPlaying: true,
      playIcon: './assets/Icons/PNG/Icon-play.png'
    }
  }


  videoHandler = () => {
    this.state.isPlaying ? this.videoPlayer.current.play() : this.videoPlayer.current.pause()

    this.setState({
      isPlaying: !this.state.isPlaying
    })

    if (this.state.isPlaying) {
      this.setState({
        playIcon: "./assets/Icons/PNG/Icon-pause.png"
      })

    } else {
      this.setState({
        playIcon: "./assets/Icons/PNG/Icon-play.png"
      })
    }
  }

  render() {
    const videoIamge = this.props.videoImg;

    return (
      <div>
        <section className="hero">
          <div className="hero__content">
            <video ref={this.videoPlayer} src={videoIamge.video + "?api_key=farzinjabbary"} poster={videoIamge.image} className="hero__content--main"></video>
          </div>
          <div className="hero__controls">
            <span className="hero__controls--play" onClick={this.videoHandler}
              style={{ backgroundImage: 'url(' + this.state.playIcon + ')' }}></span>

            <span className="hero__controls--indicator"></span>
            <span className="hero__controls--fullScreen"></span>
            <span className="hero__controls--volume"></span>
          </div>
        </section>
      </div>
    )
  }
}
