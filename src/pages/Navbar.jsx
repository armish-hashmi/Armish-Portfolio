
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FormStyles.css';


  export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Armish Hashmi Portfolio
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            to="/login"
            className={`nav-btn ${location.pathname === '/login' ? 'active' : ''}`}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className={`nav-btn ${location.pathname === '/signup' ? 'active' : ''}`}
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-btn ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}