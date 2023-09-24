import React, { useState } from 'react';
import './Tab.css';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Navbar from './Navbar';
import Footer from './Footer';

function Tab() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="heading6">
      <Navbar backButton={true} />
      <div className="card-container2">
        <div className="card2">
          <div className="Form-containera">
            <h2>Select Specific Location</h2>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              className="Formy"
              aria-label="location"
              name="location"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <FormControlLabel
                value="Rohini"
                control={<Radio color="error" />}
                label="Rohini"
                className="radys1"
              />
              <FormControlLabel
                value="Nitibagh"
                control={<Radio color="error" />}
                label="Nitibagh"
                className="radys2"
              />
            </RadioGroup>
            <h1 className="words2">Please note:</h1>
            <p className='para'>• The Tele-medicine consultations are for routine purposes and are not meant for Emergency consultations.</p>
            <p className='para'>• The appointment times for Tele-medicine consults are always tentative and there may be delays due to doctor's other last minute urgent/important commitments.</p>
            <div className="button6">
              <Link to="/Booking" className="login6">
                <button type="submit" className="next">
                  NEXT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tab;
