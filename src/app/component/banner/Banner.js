import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from 'next/link';

import gsap from "gsap";
import styles from './Banner.module.css';

const Banner = () => {
  useEffect(() => {
    gsap.from(".gsapAni", {
      y: -100,
      x: 0,
      duration: 2,
      delay: 1,
    });
  }, []);

  return (
    <div className='font-jost'>
      <div>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={`${styles.parallax} hero min-h-screen`} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523635688888-751f45576a11?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
              <div className="gsapAni text-center sm:text-left">
  <h1 className="mb-5 uppercase text-4xl font-bold text-white">
    Welcome to the Sarfaranga Hotel
  </h1>
  <div className="flex sm:block flex-col items-center">
  <p className="mb-5 font-jost text-white text-center sm:text-left">
    Book your Stay and Enjoy a Luxury Experience. <br />
    Book your room now, starting from PKR 6000 per night.
  </p>
  {/* Flexbox ONLY for mobile */}
<div className="mob flex sm:block flex-row items-center">
<button
      className="btn text-white mx-2 border-none mb-2 rounded-none"
      style={{ backgroundColor: "#E1AF55" }}
    >
  
      <Link href="/roomQuery" className='text-white' >
    Book a Room 
    </Link>
    </button>
    <button
      className="btn text-white mx-2 border-none mb-2 rounded-none"
      style={{ backgroundColor: "#E1AF55" }}
    >
       <Link href="/contact" className='text-white' >
    Contact
    </Link>
    </button>
</div>
   
  </div>
</div>




              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${styles.parallax} hero min-h-screen`} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524892400572-5e3aaf6b7b2d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
              <div className="gsapAni text-center sm:text-left">
  <h1 className="mb-5 uppercase text-4xl font-bold text-white">
  Welcome to the Sarfaranga Hotel
  </h1>
  <div className="flex sm:block flex-col items-center">
  <p className="mb-5 font-jost text-white text-center sm:text-left">
    Book your Stay and Enjoy a Luxury Experience. <br />
    Book your room now, starting from BDT 2000 per night.
  </p>
  {/* Flexbox ONLY for mobile */}
<div className="mob flex sm:block flex-row items-center">
<button
      className="btn text-white mx-2 border-none mb-2 rounded-none"
      style={{ backgroundColor: "#E1AF55" }}
    >
  
      <Link href="/roomQuery" className='text-white' >
    Book a Room 
    </Link>
    </button>
    <button
      className="btn text-white mx-2 border-none mb-2 rounded-none"
      style={{ backgroundColor: "#E1AF55" }}
    >
       <Link href="/contact" className='text-white' >
    Contact
    </Link>
    </button>
</div>
   
  </div>
</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${styles.parallax} hero min-h-screen`} style={{ backgroundImage: 'url(https://www.sarfarangahotel.com/hotelAssets/familydeluxe.jpeg)' }}>
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
              <div className="gsapAni text-center sm:text-left">
  <h1 className="mb-5 uppercase text-4xl font-bold text-white">
  Welcome to the Sarfaranga Hotel
  </h1>
  <div className="flex sm:block flex-col items-center">
  <p className="mb-5 font-jost text-white text-center sm:text-left">
    Book your Stay and Enjoy a Luxury Experience. <br />
    Book your room now, starting from BDT 2000 per night.
  </p>
  {/* Flexbox ONLY for mobile */}
<div className="mob flex sm:block flex-row items-center">
<button
      className="btn text-white mx-2 border-none mb-2 rounded-none"
      style={{ backgroundColor: "#E1AF55" }}
    >
  
      <Link href="/roomQuery" className='text-white' >
    Book a Room 
    </Link>
    </button>
    <button
      className="btn text-white mx-2 border-none mb-2 rounded-none"
      style={{ backgroundColor: "#E1AF55" }}
    >
       <Link href="/contact" className='text-white' >
    Contact
    </Link>
    </button>
</div>
   
  </div>
</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
