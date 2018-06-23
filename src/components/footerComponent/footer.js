import React, { Component } from 'react';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Map from '../mapComponent/map';
import Media from "react-media";


class Footer extends Component {
  render() {
    return (
        <footer>

        <div className="links">
          <ul>
            <li>
            <a href="https://www.facebook.com/Realfagskjelleren/">
              <img src={Facebook} style={{width: 50, height: 50}}  alt="fb"/>
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/realfagskjellern/">
            <img src={Instagram} style={{width: 50, height: 50}}  alt="insta"/>
            </a>
            </li>
            <li>
            <a href="https://twitter.com/realfagskjeller">
            <img src={Twitter} style={{width: 50, height: 50}}  alt="twit"/>
            </a>
            </li>

          </ul>

        </div>

        <Media query="(max-width: 600px)">
        {matches =>
            matches ? (
              <div className="mapSmall">
                <Map />
              </div>
        ) : (
          <div className="mapBig">
            <Map />
          </div>
        )
      }
      </Media>



        </footer>

    );
  }
}

export default Footer;
