import googleMapReact from 'google-map-react';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './locationPin';
import './index.css';

const Map = ({ location, zoomLevel}) => (
    <div id="location" className="map">
        <div className="google-map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA-BM95Rgd83QDgo4Ze3BCffuDVu3Iq1Ec'}}
            defaultCenter={location}
            defaultZoom={zoomLevel}
            >
                <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}/>
            </GoogleMapReact>
        </div>
    </div>
)
export default Map;