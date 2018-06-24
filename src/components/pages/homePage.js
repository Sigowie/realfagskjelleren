import React, { Component } from 'react';
import outOfBeer from './HomerSimpson22.png';
import waiting from './waiting.png'
import Media from "react-media";

class Homepage extends Component {
  render() {
    return (

      <div className="container-fluid">
      <h1>
      Velkommen til Realfagskjelleren
      </h1>


      <Media query="(max-width: 1200px)">
      {matches =>
          matches ? (
            <div className = "stuff">
            <div className = "eventsMobile">
              <h2>
              Arrangementer
              </h2>
              <p>
              Ingen Arrangementer lagt ut ennå
              <img src={outOfBeer} style={{width: null, height: null}}  alt="Homey"/>
              </p>
              </div>
              </div>
      ) : (
        <div className = "stuff">
        <div className = "events">
          <h2>
          Arrangementer
          </h2>
          <p>
          Ingen Arrangementer lagt ut ennå
          <img src={outOfBeer} style={{width: null, height: null}}  alt="Homey"/>
          </p>
          </div>
        <div className = "news">
          <h2>
          Nyheter
          </h2>
          <p>
          Fortsatt intet nytt
          <img src={waiting} style={{width: null, height: null}}  alt="wait"/>
          </p>
          </div>
        </div>


      )
    }
    </Media>

      </div>

    );
  }
}

export default Homepage;
