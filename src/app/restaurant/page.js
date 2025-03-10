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
        <title>Hotel Sarfanga| Best Hotel in Skardu</title>

        {/* Meta description */}
        <meta
          name="description"
          content="Hotel Sarfaranga offers a perfect blend of comfort and adventure in the heart of Skardu. With breathtaking mountain views, elegant rooms, and top-notch hospitality, it’s the ideal retreat for travelers seeking luxury and nature’s beauty"
        />
        <meta name="robots" content="index, follow" />

        {/* Meta keywords */}
        <meta
          name="keywords"
          content="Hotel Sarfaranga offers a perfect blend of comfort and adventure in the heart of Skardu. With breathtaking mountain views, elegant rooms, and top-notch hospitality, it’s the ideal retreat for travelers seeking luxury and nature’s beauty"
        />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Rus Olive Lodge | A Nature Lodge in Skardu" />
        <meta
          property="og:description"
          content="Hotel Sarfaranga offers a perfect blend of comfort and adventure in the heart of Skardu. With breathtaking mountain views, elegant rooms, and top-notch hospitality, it’s the ideal retreat for travelers seeking luxury and nature’s beauty"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hotel Sarfaranga | Luxury Hotel in Skardu" />
        <meta
          name="twitter:description"
          content="Book your stay at Hotel Sarfaranga, a comfortable hotel offering affordable rooms in Skardu."
        />
    

      
      </Head>
      <Navbar/>

     

      <div className="morning1" style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          loading="lazy"
          className="gardenimg"
          src="https://images.getrecipekit.com/20220923191452-tomato-20egg-20soup.png?aspect_ratio=16:9&quality=90&"
          alt="Balay"
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
