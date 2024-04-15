
import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom'; // Update import

const MapComponent = () => {
  const navigate = useNavigate(); // Updated from useHistory

  const MapEvents = () => {
    useMapEvents({
      click() {
        navigate('/amenities'); // Updated from history.push
      },
    });
    return null;
  };

  return (
    <MapContainer center={[41.8781, -87.6298]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />
    </MapContainer>
  );
};

export default MapComponent;
