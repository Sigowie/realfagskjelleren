import React, { Component } from 'react';
import outOfBeer from './HomerSimpson22.png';


class Homepage extends Component {
  render() {
    return (

      <div className="container-fluid">
      <h1>
      Velkommen til Realfagskjelleren
      </h1>

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
          </p>
        </div>

      </div>
      </div>

    );
  }
}

export default Homepage;
