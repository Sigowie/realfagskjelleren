import React, { Component } from 'react';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Map from '../mapComponent/map';


class Footer extends Component {
  render() {
    return (
        <footer>

        <div className="links">
          <ul>
            <li>
            <a href="https://www.facebook.com/Realfagskjelleren/">
              <img src={Facebook} style={{width: 30, height: 30}}  alt="fb"/>
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/realfagskjellern/">
            <img src={Instagram} style={{width: 30, height: 30}}  alt="insta"/>
            </a>
            </li>
            <li>
            <a href="https://twitter.com/realfagskjeller">
            <img src={Twitter} style={{width: 30, height: 30}}  alt="Twit"/>
            </a>
            </li>

          </ul>

        </div>

        <div className="map">
          <Map />
        </div>

        </footer>

    );
  }
}

export default Footer;
