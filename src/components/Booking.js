import React, { useState } from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Navbar from './Navbar';
import Footer from './Footer';

function Booking() {
  const [patientId, setPatientId] = useState('');
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [remarks, setRemarks] = useState('');
  const checky = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePatientIdChange = (event) => {
    setPatientId(event.target.value);
  };

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handleDoctorName = (event) => {
    setDoctorName(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleRemarks = (event) => {
    setRemarks(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary form submission logic here

    // Set the submission flag to true
    setIsSubmitted(true);
  };

  return (
    <div className="heading7">
      <Navbar backButton={true} />
      <div className="form-container7">
        <h2>Appointment Booking</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <TextField
            id="patientId"
            label="Patient ID"
            variant="outlined"
            value={patientId}
            onChange={handlePatientIdChange}
            fullWidth
            required
            color='error'
          />
          <TextField
            id="patientName"
            label="Patient Name"
            variant="outlined"
            value={patientName}
            onChange={handlePatientNameChange}
            fullWidth
            required
            color='error'
          />
          <TextField
            id="doctorName"
            label="Doctor's Name"
            variant="outlined"
            value={doctorName}
            onChange={handleDoctorName}
            fullWidth
            required
            color='error'
          />
          <TextField
            id="selectedDate"
            label="Date"
            variant="outlined"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth
            required
            color='error'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: '',
            }}
          />
          <TextField
            id="remarks"
            label="Remarks"
            variant="outlined"
            value={remarks}
            onChange={handleRemarks}
            fullWidth
            required
            color='error'
          />
          <div className='checky'>
            <p>Audio/Video appointment:</p>
            <Checkbox {...checky} defaultChecked color="error"/>
          </div>
          <p className='consent'>Consent is mandatory, Please click this link to record your consent.</p>
          <div className="button8">
            {isSubmitted ? (
              <Link to="/Dashboard?appointmentBooked=true">
              <button type="button" className="login8">SUBMIT</button>
            </Link>
          ) : (
            <button type="submit" className="login8">SUBMIT</button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
