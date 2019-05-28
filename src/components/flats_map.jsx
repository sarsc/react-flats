import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import GM_API_KEY from './config_key';

const Marker = () => <div className="marker" />;

class FlatsMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.50,
      lng: 0.12
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GM_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.selectedFlat.lat}
            lng={this.props.selectedFlat.lat}
            text="My Marker"
            selectedFlat={this.props.selectedFlat}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default FlatsMap;
