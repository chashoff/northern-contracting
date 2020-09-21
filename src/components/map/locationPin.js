import React from 'react';
import { RiMapPinFill } from 'react-icons/ri';

const LocationPin = ({text}) => (
    <div className="pin">
        <RiMapPinFill style={{ fontSize: '200px', color: '#FF7272'}} />
        <p className="pin-text">{text}</p>
    </div>
)
export default LocationPin;