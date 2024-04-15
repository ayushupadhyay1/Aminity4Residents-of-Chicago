import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';
import Resident from './components/resident'; // Import the Resident component
import Query from './components/query'; // Import the Query component
import Admin from './components/admin'; // Import the Admin component
import MapComponent from './components/MapComponent'; // Import the MapComponent
import AmenitiesPage from './components/AmenitiesPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resident" element={<Resident />} />
          <Route path="/query" element={<Query />} />
          <Route path="/admin" element={<Admin />} /> {/* Added Admin route */}
		  <Route path="/map" element={<MapComponent />} />
		  <Route path="/amenities" element={<AmenitiesPage />} />



          {loggedInUser ? (
            <Route path="*" element={<Navigate to="/resident" replace />} />
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
