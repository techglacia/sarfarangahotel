

"use client";
// import facebook from './assets/New folder/facebook.png';
// import instagram from './assets/New folder/instagram.png';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "../navbar/Navbar";
import '../styles/Home.css'
// import youtube from './assets/New folder/youtube.png';

// import { Helmet } from 'react-helmet';
import Footer from './../footer/Footer';


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
     
   <Navbar/>
      <div>
      {/* Overlay to dim the background */}
      {/* {showAnnouncement && (
        <div 
          className="overlay" 
          onClick={closeAnnouncement}
        />
      )} */}

      {/* Announcement Banner */}
      {/* {showAnnouncement && (
        <div className="announcement-banner">
          <h2>Announcement</h2> <p className="welcomep" style={{paddingLeft: '0vw', fontFamily: 'Lato , sans-Serif', fontWeight: '500', fontStyle: 'normal', fontSize:'2.5vh' ,color:'GrayText'}}>
            Hotel Sarfanga Skardu is closing on November 1, 2024. We will be back in March 2025 to welcome blossoms in Skardu. See you in March.</p>
          <button onClick={closeAnnouncement}>Close</button>
        </div>
      )} */}

   
    </div>
  

    <div className="MainVid">
      <img
        key={currentImageIndex} // Ensures React recognizes the change
        loading="lazy"
        src={images[currentImageIndex]}
        className={`mainvideo ${animationState}`}
        alt="Hotel View"
      />
    </div>



    <div className="morning1" style={{ display: 'flex',flexDirection:'row'}}>

  
    
    <div className="welcomemain" style={{display:'flex',flexDirection:"column"}} >
    <h1 className="welcome" style={{paddingLeft: '5vw',paddingTop:'5vh', fontSize:'8vh'}}>Welcome</h1>
      <p className="welcomep" style={{paddingLeft: '5vw', fontFamily: 'Lato , sans-Serif', fontWeight: '500', fontStyle: 'normal', fontSize:'3.5vh' ,color:'GrayText'}}>
      Hotel Sarfaranga is a charming hotel located on Airport Road in Skardu. Our hotel offers a peaceful retreat with 
      easy access to local attractions, making it the perfect place to experience the beauty and culture of the region.
       Whether you're here for business or leisure, Hotel
       Sarfaranga provides a comfortable and convenient place to stay. Book your stay today and enjoy 
    the tranquility of Skardu</p>
       <Link href="/roomQuery" className="book-now-btn">
    Book Now 
    </Link>
    <img loading="lazy" className="garden" src="hotelAssets/morninggarden.jpeg" alt=""  height="10vh"  style={{ width: '80vw' }}/>
        

    </div>
   
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
   









   {/* Footer */}
   <Footer/>
    </div>
  );
};
export default Home; 
