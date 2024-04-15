import React, { useState } from 'react';
import videoBackground from './home.mp4'; // Import your video file

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  document.title = 'Aminity4Residents of Chicago';
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
          }

          .navbar {
            background-color: #333;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }

          .burger-btn {
            background-color: transparent;
            color: #fff;
            border: none;
            font-size: 24px;
            cursor: pointer;
            margin-right: 10px; /* Added margin-right to separate from the title */
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
            background-color: #9400D3; /* Dark violet */
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

          .video-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }

          video {
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
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
        `}
      </style>
      
      <div className="navbar">
        <div className="navbar-left">
          
          <span className="title">Aminity4Residents of Chicago</span>
        </div>
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="navbar-right">
          {/* Changed to call openSignupPage when the signup button is clicked */}
          <button className="signup-btn" onClick={openSignupPage}>Signup</button>
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
    </div>
  );
}

export default Home;
