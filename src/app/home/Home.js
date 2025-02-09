"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "../navbar/Navbar";
import Head from "next/head";
import Location from "../component/map/Location";
import Feedback from "../component/reviews/Feedback";
import '../styles/Home.css';
import '../styles/style.css';
import Banner from "../component/banner/Banner";
import Footer from "../footer/Footer";
import Facilities from "../component/facilities/Facilities";
import Services from "../component/services/Services";

const Home = () => {
  const images = [
    "hotelAssets/mountain.jpeg",
    "hotelAssets/mountain.jpeg",
    "hotelAssets/mountain.jpeg",
    "hotelAssets/mountain.jpeg",
    "hotelAssets/mountain.jpeg"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationState, setAnimationState] = useState('slide-in-left');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState('slide-out-right');

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimationState('slide-in-left');
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body">
      <Head>
        <title>Hotel Sarfanga | Best Hotel in Skardu</title>
        <meta name="description" content="Hotel Sarfaranga offers a perfect blend of comfort and adventure in the heart of Skardu. With breathtaking mountain views, elegant rooms, and top-notch hospitality, it’s the ideal retreat for travelers seeking luxury and nature’s beauty" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Hotel Sarfaranga, best hotel in Skardu, luxury stay, breathtaking views, adventure" />
        <meta property="og:title" content="Hotel Sarfaranga | Luxury Hotel in Skardu" />
        <meta property="og:description" content="Hotel Sarfaranga offers a perfect blend of comfort and adventure in the heart of Skardu." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hotel Sarfaranga | Luxury Hotel in Skardu" />
        <meta name="twitter:description" content="Book your stay at Hotel Sarfaranga, a comfortable hotel offering affordable rooms in Skardu." />
      </Head>

      <Navbar />
      <Banner />
      <Services />
      <Facilities />
      <Location />
      <Feedback />

      <div className="morning2" style={{ display: 'flex', flexDirection: 'row', paddingTop: '0vh' }}>
        <div className="about" style={{ display: 'flex', flexDirection: "column" }}>
          <h1 className="welcome" style={{ paddingLeft: '5vw', fontSize: '8vh' }}>ABOUT US</h1>
          <h4 className="aboutsub ourStory" style={{ paddingLeft: '5vw', fontSize: '5vh', fontFamily: 'Lato, sans-serif', fontWeight: '500' }}>Our Story</h4>
          <p className="welcomep" style={{ paddingLeft: '5vw', paddingRight: '5vw', fontFamily: 'Lato, sans-serif', fontWeight: '500', fontSize: '3.5vh', color: 'GrayText' }}>
            The hotel is surrounded by a range of picturesque landscapes, providing guests with breathtaking views of the surrounding areas. The front of the hotel is enhanced by a well-maintained garden, while the rooms offer a serene atmosphere perfect for relaxation. Whether you are here for business or leisure, Hotel Sarfaranga promises a comfortable and memorable stay.
          </p>
          <div className="nightimgmain" style={{ display: 'flex', flexDirection: 'column' }}>
            <img loading="lazy" className="nightimg" src="hotelAssets/chair1.jpeg" alt="" height="25vh" style={{ width: '90vw' }} />
            <img loading="lazy" className="nightimg" src="hotelAssets/chair2.jpeg" alt="" height="25vh" style={{ width: '90vw' }} />
          </div>
          <h4 className="aboutsub" style={{ paddingLeft: '5vw', fontSize: '5vh', fontFamily: 'Lato, sans-serif', fontWeight: '500' }}>Where We Are Located</h4>
          <p className="welcomep" style={{ paddingLeft: '5vw', paddingRight: '5vw', fontFamily: 'Lato, sans-serif', fontWeight: '500', fontSize: '3.5vh', color: 'GrayText' }}>
            Hotel Sarfaranga Skardu offers a perfect blend of tranquility and comfort, allowing guests to experience the serene beauty of Skardu. Located on Airport Road, Skardu, the hotel is only 5-7 minutes from Skardu Airport. Surrounded by stunning landscapes, guests can easily explore nearby attractions like Blind Lake, Shigar, Sarfanga, and Kachura Lake, all within a 15 to 40-minute drive.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
