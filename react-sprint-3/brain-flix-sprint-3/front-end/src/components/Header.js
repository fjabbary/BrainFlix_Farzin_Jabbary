import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {


  render() {
    return (

      <div>
        <header className="header">
          <div className="header__left">
            <Link to={"/1af0jruup5gu"}>
              <img src="./assets/Logo/Logo-brainflix.png" alt="logo" className="header__logo" />
            </Link>
          </div>

          <div className="header__right">
            <span className="header__right--magnifier"></span>
            <input type="text" placeholder="Search" className="header__right--search" onKeyUp={this.props.search} />
            <span className="header__right--plus"></span>
            <Link to={"/upload"}>
              <button className="header__right--btn">UPLOAD</button>
            </Link>
            <img className="header__right--photo" alt="logo" src="./assets/Images/Mohan-muruge.jpg" />
          </div>
        </header>
      </div>
    )
  }
}
