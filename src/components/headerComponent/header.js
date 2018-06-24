import React, { Component } from 'react';
import logo from './logo.png';
import mLogo from './mobileLogo.png';
import Media from "react-media";
import{
  NavLink
} from 'react-router-dom';
import drop from './dropDown';


class Header extends Component {

  render() {
    return (
      <header>

      <div className="countdown">

        Countdown
      </div>


      <div className="logo">
        <NavLink to= "/">
        <Media query="(max-width: 900px)">
        {matches =>
            matches ? (
          <img src={mLogo} style={{width: null, height: 100}}  alt="mLogo"/>
        ) : (
          <img src={logo} style={{width: null, height: 100}} alt="logo"/>
        )
      }
      </Media>
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
