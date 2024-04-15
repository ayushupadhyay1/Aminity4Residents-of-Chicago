// Resident.js

// Import necessary dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import queryImage from './post.png'; // Import your query image file
import amenityImage from './Request.png'; // Import your amenity image file
import backgroundImage from './resident-background.jpg'; // Import your background image file

function Resident() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setSidebarOpen(!sidebarOpen);
  };

  // Function to open the signup page in a new tab
  const openSignupPage = () => {
    window.open('/signup', '_blank');
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            overflow-y: auto; /* Add scrollbar to the body */
            background-image: url(${backgroundImage});
            background-size: cover; /* Cover the entire viewport */
          }

          .navbar {
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }
          .navbar-center {
            flex-grow: 1; /* Allow the center div to take up available space */
            text-align: center; /* Center align the content */
          }

          .title {
            font-size: 1.5rem;
            flex-grow: 1; /* Added flex-grow to push the title to the center */
            text-align: center; /* Center align the title */
          }

          .navbar-right {
            display: flex;
            align-items: center;
          }

          .navbar-right button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin-left: 10px;
            cursor: pointer;
          }

          .sidebar {
            height: 100%;
            width: 250px;
            position: fixed;
            top: 0;
            left: -250px;
            background-color: #111;
            overflow-x: hidden;
            padding-top: 60px;
            transition: 0.5s;
            overflow-y: auto; /* Enable vertical scrolling */
          }

          .sidebar ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .sidebar li {
            padding: 10px;
          }

          .sidebar a {
            display: block;
            color: #fff;
            text-decoration: none;
          }

          .sidebar a:hover {
            background-color: #555;
          }

          .active {
            left: 0;
          }

          /* Added styles for center containers */
          .center-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* Make the container cover the entire viewport height */
          }

          .inner-container {
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 20px;
            text-align: center;
            transition: transform 0.3s ease; /* Add transition for smoother hover effect */
          }
          .inner-container:hover {
            transform: scale(1.05); /* Scale the container slightly on hover */
          }

          .inner-container img {
            max-width: 100%;
            max-height: 300px; /* Set max height for the image */
            border-radius: 8px;
            margin-bottom: 10px;
          }

          .inner-container p {
            font-size: 18px;
            margin-bottom: 0; /* Remove default margin for paragraphs */
          }
        `}
      </style>

      <div className="navbar">
        <div className="navbar-center">
          <span className="title">Resident Dashboard</span>
        </div>

        <div className="navbar-right">
          {/* Changed to call openSignupPage when the signup button is clicked */}

        </div>
      </div>

      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        {/* Sidebar Content Goes Here */}
        <ul>
          <li><a href="#">Menu Item 1</a></li>
          <li><a href="#">Menu Item 2</a></li>
          <li><a href="#">Menu Item 3</a></li>
          {/* Add more menu items as needed */}
        </ul>
      </div>

      {/* Center containers */}
      <div className="center-container">
        <div className="inner-container">
          {/* Use Link to navigate to the query route when clicked */}
          <Link to="/query">
            <img src={queryImage} alt="Query" />
            <p>Raised a query</p>
          </Link>
        </div>
        <div className="inner-container">
          {/* <img src={amenityImage} alt="Request Amenity" />
          <p>Request for amenities</p> */}
			<Link to="/map">
            <img src={amenityImage} alt="Request Amenity" />
            <p>Raise a query</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resident;
