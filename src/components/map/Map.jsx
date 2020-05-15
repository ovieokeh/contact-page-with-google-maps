import React from 'react'
import GoogleMapReact from 'google-map-react'

import './map.css'

const mapConfig = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 10,
}

const Map = () => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
      />
    </div>
  </div>
)

export default Map
