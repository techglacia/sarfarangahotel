

"use client";
// import facebook from './assets/New folder/facebook.png';
// import instagram from './assets/New folder/instagram.png';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "../navbar/Navbar";
import Head from "next/head";
import Location from "../component/map/Location";
import Feedback from "../component/reviews/Feedback"

import '../styles/Home.css'
import '../styles/style.css'
// import youtube from './assets/New folder/youtube.png';
import Banner from "../component/banner/Banner";
// import { Helmet } from 'react-helmet';

import Footer from './../footer/Footer';
import Facilities from "../component/facilities/Facilities";
import Services from "../component/services/Services";
import FeaturedRooms from "../component/featured/Featured";


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
        setAnimationState('slide-out-right'); // Slide current image out
  
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image
          setAnimationState('slide-in-left'); // Slide new image in
        }, 500); // Wait for slide-out animation to complete
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  

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

     <Banner/>
   <Services/>
   <Facilities/>
   {/* <FeaturedRooms/> */}
   <Location/>
   <Feedback/>


   



  

   
<<<<<<< HEAD
    </div>

    <div className="morning2" style={{ display: 'flex',flexDirection:'row' , paddingTop:'0vh'
    }}>
     
    
     <div className="about" style={{display:'flex', flexDirection:"column"}}>
  <h1 className="welcome" style={{paddingLeft: '5vw', fontSize:'8vh'}}>ABOUT US</h1>
  <h4 className="aboutsub ourStory" style={{ paddingLeft: '5vw', fontSize: '5vh', fontFamily: 'Lato , sans-Serif', fontWeight: '500', fontStyle: 'normal' }}>
    Our Story
  </h4>
  <p className="welcomep" style={{paddingLeft: '5vw', paddingRight:'5vw', fontFamily: 'Lato , sans-Serif', fontWeight: '500', fontStyle: 'normal', fontSize:'3.5vh', color:'GrayText'}}>
  The hotel is surrounded by a range of picturesque landscapes, providing guests with breathtaking views of 
  the surrounding areas. The front of the hotel is enhanced by a well-maintained garden, while the rooms offer
   a serene atmosphere perfect for relaxation. 
  Whether you are here for business or leisure, Hotel Sarfaranga promises a comfortable and memorable stay.
  </p>
  <div className="nightimgmain" style={{display:'flex', flexDirection:'column'}}>
    <img loading="lazy" className="nightimg" src="hotelAssets/chair1.jpeg" alt="" height="25vh" style={{ width: '90vw' }}/>
    <img loading="lazy" className="nightimg" src="hotelAssets/chair2.jpeg" alt="" height="25vh" style={{ width: '90vw' }}/>
  </div>
  <h4 className="aboutsub" style={{paddingLeft: '5vw', fontSize:'5vh', fontFamily: 'Lato , sans-Serif', fontWeight: '500', fontStyle: 'normal'}}>Where We Are Located</h4>
  <p className="welcomep" style={{paddingLeft: '5vw', paddingRight:'5vw', fontFamily: 'Lato , sans-Serif', fontWeight: '500', fontStyle: 'normal', fontSize:'3.5vh', color:'GrayText'}}>
  Hotel Sarfarande Skardu offers a perfect blend of tranquility and comfort, allowing guests
  to experience the serene beauty of Skardu. Located on Airport Road, Skardu, the hotel is onl
  y 5-7 minutes from Skardu Airport. Surrounded by stunning landscapes, guests can easily explore
   nearby attractions like Blind Lake,
   Shigar, Sarfanga, and Kachura Lake, all within 15 to 40 minutes' drive.
  </p>
</div>

 
    </div>
=======
>>>>>>> 5b83e56 (Updated files after npm rebuild)
   









   {/* Footer */}
   <Footer/>
    </div>
  );
};
export default Home; 
