"use client";
import React from "react";
import Head from "next/head";
import Navbar from "../navbar/Navbar";
import Footer from './../footer/Footer';
import './../styles/Home.css';

const Restaurant = () => {
  return (
    <div className="body">
      <Head>
        {/* Title of the page */}
        <title>Hotel Sarfanga| Best Hotel in Skardu - Cozy, Comfortable & Affordable</title>

        {/* Meta description */}
        <meta
          name="description"
          content="Rus Olive Lodge is a small lodge situated in the beautiful Skardu Valley, deep in the mountains of the Karakoram range"
        />
        <meta name="robots" content="index, follow" />

        {/* Meta keywords */}
        <meta
          name="keywords"
          content="Rus Olive Lodge, Skardu hotels, affordable hotels Skardu, cozy lodge Skardu, best hotels in Skardu, places to stay in Skardu, Skardu tourism, hotel near UOB Sundus Campus Skardu, vacation Skardu, hotel in Skardu for tourists"
        />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Rus Olive Lodge | A Nature Lodge in Skardu" />
        <meta
          property="og:description"
          content="Rus Olive Lodge is a small lodge situated in the beautiful Skardu Valley, deep in the mountains of the Karakoram range"
        />
        <meta property="og:image" content="https://www.rusolivelodge.com/images/lodge.jpg" />
        <meta property="og:url" content="https://rusolivelodge.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rus Olive Lodge | Cozy & Affordable Lodge in Skardu" />
        <meta
          name="twitter:description"
          content="Book your stay at Rus Olive Lodge, a comfortable hotel offering affordable rooms and great service in the heart of Skardu."
        />
        <meta name="twitter:image" content="https://www.rusolivelodge.com/images/lodge.jpg" />

        {/* Open Graph locale (optional, good for regional SEO) */}
        <meta property="og:locale" content="en_US" />

        {/* Canonical URL - Prevents duplicate content issues */}
        <link rel="canonical" href="https://rusolivelodge.com" />
        <meta name="google-site-verification" content="K_pEM6EH78qy2-mzv9wqmGVp4K31IbaZl1fI9j9LIxI" />
      </Head>
      <Navbar/>

      <div style={{ display: 'flex', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
        <img className="hotelLogo" style={{ height: '40vh' }} src="favicon1.png" alt="Rus Olive Lodge Logo" />
      </div>

      <div className="morning1" style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          loading="lazy"
          className="gardenimg"
          src="Homeimg/apricotinfusion.webp"
          alt="Apricot Infusion"
          style={{ height: "70vh", width: '150vw' }}
        />

        <div className="welcomemain" style={{ display: 'flex', flexDirection: 'column' }}>
          <h1
            className="restaurantH"
            style={{
              paddingLeft: '3vw',
              paddingTop: '5vh',
              fontSize: '6vh',
            }}
          >
           Balay
          </h1>
          <p
            className="welcomep"
            style={{
              paddingLeft: '3vw',
              fontFamily: 'Lato , sans-Serif',
              fontWeight: '500',
              fontStyle: 'normal',
              fontSize: '3.5vh',
              color: 'GrayText',
            }}
          >
            A traditional Skardu bread made of wheat flour, cooked over an open flame. It's often served with yogurt or meat dishes.
          </p>
          <a href="/check" className="book-now-btn">
            Book Now
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Restaurant;
