// Map.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const InteractiveMap = () => {
    const [markers, setMarkers] = useState([]);

    const handleMapClick = (event) => {
        console.log("Map clicked");
        const { lat, lng } = event.latlng;
        const newMarker = { lat, lng };
        setMarkers(prevMarkers => [...prevMarkers, newMarker]);
    };

    const handleMarkerClick = (markerIndex) => {
        console.log(markers);
        setMarkers(prevMarkers => prevMarkers.filter((marker, index) => index !== markerIndex));
    };


    return (
        <MapContainer
            center={[40.7128, -74.006]}
            zoom={10}
            style={{ height: '100vh', width: '100%' }}
            onClick={handleMapClick}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers.map((marker, index) => (
                <Marker key={index} position={[marker.lat, marker.lng]}>
                    <Popup>
                        <span onClick={() => handleMarkerClick(index)}>Remove Marker</span>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default InteractiveMap;
