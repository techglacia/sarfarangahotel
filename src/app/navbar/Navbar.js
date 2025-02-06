
import React, { useState } from "react";
import "./../styles/NavBar.css";
import {  HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Link from 'next/link';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
   <>
    <nav className="navbar">
        <div className="nav-container">
        <Link href="/" className="nav-logo flex items-center space-x-0">
  <img className="m-0" src="/hotelAssets/Logo.jpeg" alt="" />
 
</Link>




          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
              
                href="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                href="/room"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                href="/restaurant"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Restaurant
              </Link>
            </li>
            <li className="nav-item">
              <Link
                
                href="/contact"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
   </>
  )
}

export default Navbar