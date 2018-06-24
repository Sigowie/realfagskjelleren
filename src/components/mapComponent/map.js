import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.png';

const AnyReactComponent = ({ text }) => <div><img src= {Marker} className="marker" style={{width: null, height: 20}} /></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 63.4126816, lng: 10.4324555},
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '250px', width: '300px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBrImOEsgT-mBTptlLHW--xEun5-E-BzyM'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >


          <AnyReactComponent
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
