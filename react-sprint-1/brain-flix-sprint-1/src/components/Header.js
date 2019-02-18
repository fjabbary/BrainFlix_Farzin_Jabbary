import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (

      <div>
        <header className="header">
          <div className="header__left">
            <img src="./assets/Logo/Logo-brainflix.png" alt="logo" className="header__logo" />
          </div>

          <div className="header__right">
            <span className="header__right--magnifier"></span>
            <input type="text" placeholder="Search" className="header__right--search" />
            <span className="header__right--plus"></span>
            <button className="header__right--btn">UPLOAD</button>
            <img className="header__right--photo" alt="logo" src="./assets/Images/Mohan-muruge.jpg" />
          </div>
        </header>
      </div>
    )
  }
}
