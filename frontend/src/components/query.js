import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import backgroundImage from './query.png';
import greenMarkerIcon from './red-marker.png'; // Import the marker icon image

function Query() {
  const [place, setPlace] = useState('Lincoln Park');
  const [address, setAddress] = useState('');
  const [complaint, setComplaint] = useState('');
  const [description, setDescription] = useState('');
  const mapRef = useRef(null);

  // Define green marker icon
  const greenIcon = L.icon({
    iconUrl: greenMarkerIcon, // Use the imported marker icon image
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  useEffect(() => {
    document.title = 'Aminity4Residents of Chicago';
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([41.8781, -87.6298], 13); // Chicago coordinates
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
    }
  }, []);

  useEffect(() => {
    // Retrieve form data from local storage
    const savedFormData = localStorage.getItem('queryFormData');
    const parsedFormData = savedFormData ? JSON.parse(savedFormData) : {};

    // Set form fields with saved data if available
    setPlace(parsedFormData.place || 'Lincoln Park');
    setAddress(parsedFormData.address || '');
    setComplaint(parsedFormData.complaint || '');
    setDescription(parsedFormData.description || '');
  }, []);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
    // Update map view and add marker based on selected place
    switch (e.target.value) {
      case 'Lincoln Park':
        mapRef.current.setView([41.9217, -87.6339], 15); // Lincoln Park coordinates
        addMarker([41.9217, -87.6339]);
        break;
      case 'Illinois Institute of Technology':
        mapRef.current.setView([41.8349, -87.6270], 15); // Illinois Institute of Technology coordinates
        addMarker([41.8349, -87.6270]);
        break;
      case "O'Hare Airport":
        mapRef.current.setView([41.9786, -87.9048], 13); // O'Hare Airport coordinates
        addMarker([41.9786, -87.9048]);
        break;
      case 'Midway Airport':
        mapRef.current.setView([41.7868, -87.7522], 13); // Midway Airport coordinates
        addMarker([41.7868, -87.7522]);
        break;
      default:
        // Set default center coordinates if place is not recognized
        mapRef.current.setView([41.8781, -87.6298], 13); // Default coordinates for Chicago
        removeMarkers();
    }
  };

  const addMarker = (coordinates) => {
    removeMarkers(); // Remove existing markers before adding new one
    L.marker(coordinates, { icon: greenIcon }).addTo(mapRef.current);
  };

  const removeMarkers = () => {
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current.removeLayer(layer);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Capture form data
    const formData = {
      place,
      address,
      complaint,
      description
    };

    // Save form data to local storage
    localStorage.setItem('queryFormData', JSON.stringify(formData));
  };

  return (
    <div className="container">
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            overflow-y: auto; /* Add scrollbar to the body */
            background-image: url(${backgroundImage});
            background-size: cover; /* Cover the entire viewport */
          }

          .container {
            position: relative;
          }

          .navbar {
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }

          #map {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 500px;
            height: 500px;
            z-index: 0;
          }

          .form-container {
            z-index: 1;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 20px;
            max-width: 500px; /* Increased maximum width */
          }

          @media (min-width: 768px) {
            .form-container {
              margin-left: 20px; /* Adjust margin for larger screens */
            }
          }

          .form-heading {
            text-align: center;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-label {
            display: block;
            margin-bottom: 5px;
          }

          .form-input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .submit-button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
          }
        `}
      </style>
      <div className="form-container">
        <h2 className="form-heading">Query Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="place" className="form-label">Select Place:</label>
            <select id="place" name="place" value={place} onChange={handlePlaceChange} className="form-input">
              <option value="Lincoln Park">Lincoln Park</option>
              <option value="Illinois Institute of Technology">Illinois Institute of Technology</option>
              <option value="O'Hare Airport">O'Hare Airport</option>
              <option value="Midway Airport">Midway Airport</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="address" className="form-label">Address:</label>
            <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="complaint" className="form-label">Complaint:</label>
            <input type="text" id="complaint" name="complaint" value={complaint} onChange={(e) => setComplaint(e.target.value)} className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Describe Your Complaint:</label>
            <textarea id="description" name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} className="form-input"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div id="map"></div>
    </div>
  );
}

export default Query;
