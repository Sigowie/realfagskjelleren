import React, { Component } from 'react';
import logos from './kult.png';


class info extends Component {
  render() {
    return (

      <div className="container-fluid">
      <h1>
        Realfagskjelleren
      </h1>
      <div className = "stuff">
      <p>
      Realfagskjelleren er  linjeforeningskjelleren til Online, Volvox & Alkymisten, Delta og Spanskrøret.
      <img src={logos} style={{width: 500, height: null}}  alt="logoer"/>
      </p>
      </div>
      </div>

    );
  }
}

export default info;
