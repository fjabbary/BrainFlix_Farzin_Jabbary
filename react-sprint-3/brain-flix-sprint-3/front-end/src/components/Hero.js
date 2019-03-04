import React, { Component } from 'react'

export default class Hero extends Component {

  constructor() {
    super()
    this.videoPlayer = React.createRef();

    this.state = {
      isPlaying: true,
      isMuted: false,
      playIcon: './assets/Icons/PNG/Icon-play.png',
      mutedIcon: './assets/Icons/PNG/Icon-volume.png'
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

  fullScreenHandler = () => {
    if (this.videoPlayer.current.requestFullscreen) {
      this.videoPlayer.current.requestFullscreen();
    }
  }

  volumeHandler = () => {
    this.state.isMuted ? this.videoPlayer.current.muted = true : this.videoPlayer.current.muted = false
    this.setState({
      isMuted: !this.state.isMuted
    })

    if (this.state.isMuted) {
      this.setState({
        mutedIcon: "./assets/Icons/PNG/volume-off-indicator.png"
      })
    } else {
      this.setState({
        mutedIcon: "./assets/Icons/PNG/Icon-volume.png"
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
            <span className="hero__controls--fullScreen" onClick={this.fullScreenHandler}></span>
            <span className="hero__controls--volume" onClick={this.volumeHandler}
              style={{ backgroundImage: 'url(' + this.state.mutedIcon + ')' }}
            ></span>
          </div>
        </section>
      </div>
    )
  }
}
