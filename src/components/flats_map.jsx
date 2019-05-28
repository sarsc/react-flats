import React from 'react';
import GoogleMapReact from 'google-map-react';

import GM_API_KEY from './config_key';

const marker = (props) => {
  // TO DO: display markers only when flat selected
  <div
    lat={props.selectedFlat.lat}
    lng={props.selectedFlat.lat}
    text="My Marker"
    selectedFlat={props.selectedFlat}
  />;
};

const FlatsMap = (props) => {
  const center = {
    lat: props.selectedFlat.lat,
    lng: props.selectedFlat.lng
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GM_API_KEY }}
        center={center}
        zoom={13}
      >
        <div className="marker">
          {marker}
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default FlatsMap;
