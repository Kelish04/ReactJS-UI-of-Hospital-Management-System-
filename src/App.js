import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Create from './components/Create';
import Otp from './components/Otp';
import Forgot from './components/Forgot';
import Dashboard from './components/Dashboard';
import Tab from './components/Tab';
import Booking from './components/Booking';
import Notification from './components/Notification';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Tab" element={<Tab />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Notification" element={<Notification />} /> {/* Updated route for the Notification component */}
      </Routes>
    </Router>
  );
};

export default App;
