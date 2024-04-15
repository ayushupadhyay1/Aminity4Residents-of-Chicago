// Resident.js

// Import necessary dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './admin.png'; // Import your background image file

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
            overflow-y: auto;
            background-image: url(${backgroundImage}); /* Use the imported background image */
            background-size: cover;
          }

          .navbar {
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }

          .navbar-center {
            flex-grow: 1;
            text-align: center;
          }

          .title {
            font-size: 1.5rem;
            flex-grow: 1;
            text-align: center;
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
            overflow-y: auto;
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

          .center-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100vh;
          }

          .inner-container {
            background-color: rgba(191, 148, 228, 0.5); /* Lighter violet color with transparency */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 20px;
            text-align: center;
            transition: transform 0.3s ease;
          }
          .inner-container:hover {
            transform: scale(1.05);
          }

          .inner-container img {
            max-width: 100%;
            max-height: 300px;
            border-radius: 8px;
            margin-bottom: 10px;
          }

          .inner-container p {
            font-size: 18px;
            margin-bottom: 0;
          }
        `}
      </style>
      
      <div className="navbar">
        <div className="navbar-center">
          <span className="title">Admin Dashboard</span>
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
          <img src="https://www.allrecipes.com/thmb/O0rtIZnxXdHren0mlBlKFtUs594=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/102793756-community-garden-and-greenhouse-photo-by-meredith-6cfd0cbabbb14a568fb9e9bca735fef9.jpg" alt="Public Park" />
          <p>Request for a Public Park</p>
        </div>
        <div className="inner-container">
          <img src="https://www.miracle-recreation.com/content/uploads/2018/11/Image-Header_Park.jpg.webp" alt="Playground" />
          <p>Request for a Playground</p>
        </div>
        <div className="inner-container">
          <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475981-Boston-Public-Garden.jpg" alt="Community Garden" />
          <p>Request for a Community Garden</p>
        </div>
        <div className="inner-container">
          <img src="https://resources.depaul.edu/campus-recreation/publishingimages/hp-membership-02.jpg" alt="Fitness Center" />
          <p>Request for a Fitness Center</p>
        </div>
      </div>
    </div>
  );
}

export default Resident;
