import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRight, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import image from './assets/image.jpg';
import './fonts.css';

function Login() {
  return (
    <div>
      <div className="heading">
        <div className="image">
          <img src={image} alt="Logo" />
        </div>

        <div className="goodmorning">
          <h1>Login</h1>
          <p>Please sign in to continue.</p>
        </div>

        <form className="form-container">
          <div className="forms">
            <div className="form-group">
              <div className="input-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="EMAIL"
              />
            </div>

            <div className="form-group">
              <div className="input-icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="PASSWORD"
              />
              <a href="/forgot" className="forgot">FORGOT</a>
            </div>
          </div>
        </form>

        <div className="button">
          <Link to = '/Dashboard'>
          <button type="submit" className="login">LOGIN</button></Link>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="footer">
          Don't have an account? <Link to="/create" className="signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
