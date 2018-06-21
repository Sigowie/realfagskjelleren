import React, { Component } from 'react';
import logo from './logo.png';
import{
  link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>

      <div className="countdown">
        Countdown
      </div>

      <div className="logo">
        <a href="/">
          <img src={logo} style={{width: null, height: 100}}  alt="logo"/>
        </a>
      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="/Nyheter">Nyheter</a>
          </li>
          <li>
              <a href="/Barkart">Barkart</a>
          </li>
          <li className="last">
              <a href="/Info">Info</a>
          </li>

        </ul>
      </nav>

      </header>

    );
  }
}

export default Header;
