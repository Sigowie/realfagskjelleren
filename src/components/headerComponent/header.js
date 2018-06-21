import React, { Component } from 'react';
import logo from './logo.png';
import{
  NavLink
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>

      <div className="countdown">
        Countdown
      </div>

      <div className="logo">
        <NavLink to= "/">
          <img src={logo} style={{width: null, height: 100}}  alt="logo"/>
        </NavLink>
      </div>

      <nav>
        <ul>
          <li className="first">
            <NavLink to="/Nyheter">Nyheter</NavLink>
          </li>
          <li>
              <NavLink to="/Barkart">Barkart</NavLink>
          </li>
          <li classNam="last">
              <NavLink to="/Info">Info</NavLink>
          </li>

        </ul>
      </nav>

      </header>

    );
  }
}

export default Header;
