import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import './maps.css'

const Map = (props) => {
  
    const {location, zoomLevel} = props
    while(location.length == 0) {
      return <span>Loading...</span>;
    }
    return ( 
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBs8hoBy79EY7Y3BzQMPRCqyN1-9KAp288', v: '3.31' }}
          defaultCenter={location.center}
          zoom={zoomLevel}
          center={location.center}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
            position={{lat: location.lat,lng:location.lng}}
          />
        </GoogleMapReact>
      </div>
    </div>

    )
  }

  export default Map

  