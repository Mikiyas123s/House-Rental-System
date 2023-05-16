import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  Logotre } from '../assets';

export default class Navbar extends Component {
 
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logotre} alt="Beach Resort" />
            </Link>
           
          </div>
          <ul
            className="nav-links"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Houses</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
