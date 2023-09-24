import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faList,
  faFlask,
  faMicroscope,
  faPrescriptionBottleAlt,
  faFileUpload,
  faFileAlt,
  faClipboardList,
  faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import './fonts.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


function Dashboard() {

  const handleCardClick = (cardTitle) => {
    console.log(`Clicked on ${cardTitle} card`);
    const card = document.getElementById(cardTitle);
    card.classList.add('bounce');
    setTimeout(() => {
      card.classList.remove('bounce');
    }, 300);
  }

  return (
    <div className="heading5">
      {/* <Navbar backButton={false} /> */}
      <div className="card-container">
        <Link
          to="/Tab"
          className="card"
          onClick={() => handleCardClick('Telemedicine Appointment Booking')}
          id="Telemedicine Appointment Booking"
        >
          <FontAwesomeIcon icon={faPlus} size="2x" />
          <h2 className="words">Telemedicine Appointment Booking</h2>
        </Link>
        <div className="card" onClick={() => handleCardClick('My Appointments')} id="My Appointments">
          <FontAwesomeIcon icon={faList} size="2x" />
          <h2 className="words">My Appointments</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Lab Reports')} id="Lab Reports">
          <FontAwesomeIcon icon={faFlask} size="2x" />
          <h2 className="words">Lab Reports</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Radiology Reports')} id="Radiology Reports">
          <FontAwesomeIcon icon={faMicroscope} size="2x" />
          <h2 className="words">Radiology Reports</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Prescriptions')} id="Prescriptions">
          <FontAwesomeIcon icon={faPrescriptionBottleAlt} size="2x" />
          <h2 className="words">Prescriptions</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Upload Documents')} id="Upload Documents">
          <FontAwesomeIcon icon={faFileUpload} size="2x" />
          <h2 className="words">Upload Documents</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Previous Visit Details')} id="Previous Visit Details">
          <FontAwesomeIcon icon={faFileAlt} size="2x" />
          <h2 className="words">Previous Visit Details</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('Discharge Summary')} id="Discharge Summary">
          <FontAwesomeIcon icon={faClipboardList} size="2x" />
          <h2 className="words">Discharge Summary</h2>
        </div>
        <div className="card" onClick={() => handleCardClick('My Bills')} id="My Bills">
          <FontAwesomeIcon icon={faFileInvoiceDollar} size="2x" />
          <h2 className="words">My Bills</h2>
        </div>
      </div>
      <Footer />
    </div>

    
  );
}

export default Dashboard;
