import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css';
import logo from './logo.png';
import Admin from './admin.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
           <img src={logo} alt="logo" className="logo" />
           <h2>Sanjay shaw</h2>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/account" className="nav-link-admin">
              <img src={Admin} alt="Admin" className="admin" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
