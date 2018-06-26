import React, { Component } from 'react';
import logo from './logo.png';
import mLogo from './mobileLogo.png';
import Media from "react-media";
import{
  NavLink
} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'





class Header extends Component {



  render() {
    return (
      <header>

      <div className="countdown">

      <Media query="(max-width: 900px)">
      {matches =>
          matches ? (
            " "
      ) : (
        "Countdown"
      )
    }
    </Media>

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


      <Media query="(max-width: 900px)">
      {matches =>
          matches ? (
            <Menu right>

              <a id="Nyheter" className="menu-item" href="/Nyheter">Nyheter</a>
              <a id="Barkart" className="menu-item" href="/Barkart">Barkart</a>
              <a id="Info" className="menu-item" href="/Info">Info</a>
            </Menu>
      ) : (
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
      )
    }
    </Media>



      </header>


    );
  }
}


export default Header;
