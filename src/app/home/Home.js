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

    

      <Footer />
    </div>
  );
};

export default Home;
