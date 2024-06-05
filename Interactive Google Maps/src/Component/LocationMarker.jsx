// LocationMarker.jsx
import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";

const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    const handleMapClick = (e) => {
        setPosition(e.latlng);
    };

    return position === null ? null : (
        <Marker position={position} eventHandlers={{ click: handleMapClick }}>
            <Popup>You clicked here</Popup>
        </Marker>
    );
};

export default LocationMarker;
