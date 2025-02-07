"use client";
import React from 'react'
import Navbar from '../navbar/Navbar';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import global from '../globals.css';

function page() {
 // Array of guest data (name, image, and feedback)
 const guests = [
    {
    name: "Hadia Majid",
    image: "customer1/1.png",
    feedback: "The room was cozy and well-kept, offering a peaceful ambiance for a perfect retreat. Loved the view from the window!",
  },
  {
    name: "Kashif Ahsan",
    image: "customer1/2.jpeg",
    feedback: "I had an amazing stay! The room exceeded my expectations, and the staff were very friendly and attentive. Highly recommend!",
  },
  {
    name: "Hassan Ahmed",
    image: "customer1/3.jpg",
    feedback: "A fantastic experience overall! The bed was so comfortable, and the service was impeccable. Can't wait to return!",
  },
  {
    name: "Brian Martin",
    image: "customer1/4.jpeg",
    feedback: "Wonderful stay! The room was spacious, clean, and very inviting. I felt right at home from the moment I walked in.",
  },
  {
    name: "Jane Smith",
    image: "customer1/5.jpeg",
    feedback: "Loved the location! It was perfect for exploring the city, and the room provided everything I needed to unwind after a busy day.",
  },
  // Add more guests as needed
];
 const guests1 = [
    {
    name: "Hadia Majid",
    image: "customer1/1.png",
    feedback: "The room was cozy and well-kept, offering a peaceful ambiance for a perfect retreat. Loved the view from the window!",
  },
  {
    name: "Kashif Ahsan",
    image: "customer1/2.jpeg",
    feedback: "I had an amazing stay! The room exceeded my expectations, and the staff were very friendly and attentive. Highly recommend!",
  },
  {
    name: "Hassan Ahmed",
    image: "customer1/3.jpg",
    feedback: "A fantastic experience overall! The bed was so comfortable, and the service was impeccable. Can't wait to return!",
  },
  {
    name: "Brian Martin",
    image: "customer1/4.jpeg",
    feedback: "Wonderful stay! The room was spacious, clean, and very inviting. I felt right at home from the moment I walked in.",
  },
  {
    name: "Jane Smith",
    image: "customer1/5.jpeg",
    feedback: "Loved the location! It was perfect for exploring the city, and the room provided everything I needed to unwind after a busy day.",
  },
  // Add more guests as needed
];
 const guests2 = [
    {
    name: "Hadia Majid",
    image: "customer1/1.png",
    feedback: "The room was cozy and well-kept, offering a peaceful ambiance for a perfect retreat. Loved the view from the window!",
  },
  {
    name: "Kashif Ahsan",
    image: "customer1/2.jpeg",
    feedback: "I had an amazing stay! The room exceeded my expectations, and the staff were very friendly and attentive. Highly recommend!",
  },
  {
    name: "Hassan Ahmed",
    image: "customer1/3.jpg",
    feedback: "A fantastic experience overall! The bed was so comfortable, and the service was impeccable. Can't wait to return!",
  },
  {
    name: "Brian Martin",
    image: "customer1/4.jpeg",
    feedback: "Wonderful stay! The room was spacious, clean, and very inviting. I felt right at home from the moment I walked in.",
  },
  {
    name: "Jane Smith",
    image: "customer1/5.jpeg",
    feedback: "Loved the location! It was perfect for exploring the city, and the room provided everything I needed to unwind after a busy day.",
  },
  // Add more guests as needed
];
  const guests3 = [
    {
    name: "Hadia Majid",
    image: "customer1/1.png",
    feedback: "The room was cozy and well-kept, offering a peaceful ambiance for a perfect retreat. Loved the view from the window!",
  },
  {
    name: "Kashif Ahsan",
    image: "customer1/2.jpeg",
    feedback: "I had an amazing stay! The room exceeded my expectations, and the staff were very friendly and attentive. Highly recommend!",
  },
  {
    name: "Hassan Ahmed",
    image: "customer1/3.jpg",
    feedback: "A fantastic experience overall! The bed was so comfortable, and the service was impeccable. Can't wait to return!",
  },
  {
    name: "Brian Martin",
    image: "customer1/4.jpeg",
    feedback: "Wonderful stay! The room was spacious, clean, and very inviting. I felt right at home from the moment I walked in.",
  },
  {
    name: "Jane Smith",
    image: "customer1/5.jpeg",
    feedback: "Loved the location! It was perfect for exploring the city, and the room provided everything I needed to unwind after a busy day.",
  },
  // Add more guests as needed
];

// State to track the current guest index
const [currentGuestIndex, setCurrentGuestIndex] = useState(0);
const [slideDirection, setSlideDirection] = useState('slide-in-left');

useEffect(() => {
  const interval = setInterval(() => {
    setSlideDirection('slide-out-right'); // Slide current feedback out
    setTimeout(() => {
      setCurrentGuestIndex((prev) => (prev + 1) % guests.length);
      setSlideDirection('slide-in-left'); // Slide new feedback in
    }, 500); // Match animation duration
  }, 4000);

  return () => clearInterval(interval);
}, [guests.length]);



const [currentGuestIndex1, setCurrentGuestIndex1] = useState(0);
const [slideDirection1, setSlideDirection1] = useState('slide-in-left');

useEffect(() => {
  const interval = setInterval(() => {
    setSlideDirection1('slide-out-right'); // Slide current feedback out
    setTimeout(() => {
      setCurrentGuestIndex1((prev) => (prev + 1) % guests1.length);
      setSlideDirection1('slide-in-left'); // Slide new feedback in
    }, 500); // Match animation duration
  }, 4000);

  return () => clearInterval(interval);
}, [guests1.length]);




const [currentGuestIndex2, setCurrentGuestIndex2] = useState(0);
const [slideDirection2, setSlideDirection2] = useState('slide-in-left');

useEffect(() => {
  const interval = setInterval(() => {
    setSlideDirection2('slide-out-right'); // Slide current feedback out
    setTimeout(() => {
      setCurrentGuestIndex2((prev) => (prev + 1) % guests2.length);
      setSlideDirection2('slide-in-left'); // Slide new feedback in
    }, 500); // Match animation duration
  }, 4000);

  return () => clearInterval(interval);
}, [guests2.length]);



const [currentGuestIndex3, setCurrentGuestIndex3] = useState(0);
const [slideDirection3, setSlideDirection3] = useState('slide-in-left');

useEffect(() => {
  const interval = setInterval(() => {
    setSlideDirection3('slide-out-right'); // Slide current feedback out
    setTimeout(() => {
      setCurrentGuestIndex3((prev) => (prev + 1) % guests3.length);
      setSlideDirection3('slide-in-left'); // Slide new feedback in
    }, 500); // Match animation duration
  }, 4000);

  return () => clearInterval(interval);
}, [guests3.length]);


  return (
 <>
    <Navbar/>
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
  <h1 className="text-center text-3xl  text-gray-900">
  Our Family Suit Room
</h1>
   
    <div className="lg:w-4/6 mx-auto">
    
    <div className="rounded-lg overflow-hidden">
  <img
    alt="content"
    className="object-cover w-full h-auto sm:w-[1100px] sm:h-[500px]"
    src="hotelAssets/family.jpeg"
  />
</div>
      <div className="flex flex-col sm:flex-row mt-10 mx-5">
  <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
    <p className="leading-relaxed text-lg mb-4 break-words">
    Our Family Suite Room combines spacious comfort with modern amenities for a perfect family getaway. Enjoy plush bedding, a cozy seating area, and a private en-suite bathroom.
    </p>
    <Link href="/roomQuery" className="text-white inline-flex items-center bg-[indigo] rounded-lg p-2">
      Book Now 
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</div>



    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5  mx-auto flex flex-col">
  <h1 className="text-center text-3xl  text-gray-900">
  Our Deluxe Room
</h1>
    <div className="lg:w-4/6 mx-auto">
    <div className="rounded-lg overflow-hidden">
  <img
    alt="content"
    className="object-cover w-full h-auto sm:w-[1100px] sm:h-[500px]"
    src="hotelAssets/standard.jpeg"
  />
</div>
<div className="flex flex-col sm:flex-row mt-10 mx-5">
  <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
  <p className="leading-relaxed text-base sm:text-lg mb-4 break-words">
  Our Deluxe Room offers a luxurious retreat with modern amenities for a comfortable stay. Relax in plush bedding, enjoy elegant furnishings, and unwind in a spacious, well-appointed bathroom.


</p>

    <Link href="/roomQuery" className="text-white inline-flex items-center bg-[indigo] rounded-lg p-2">
      Book Now 
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</div>

    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
  <h1 className="text-center text-3xl  text-gray-900">
  Our Family Deluxe Room
</h1>
    <div className="lg:w-4/6 mx-auto">
    <div className="rounded-lg overflow-hidden">
  <img
    alt="content"
    className="object-cover w-full h-auto sm:w-[1100px] sm:h-[500px]"
    src="hotelAssets/familydeluxe.jpeg"
  />
</div>
<div className="flex flex-col sm:flex-row mt-10 mx-5">
  <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
  <p className="leading-relaxed text-base sm:text-lg mb-4 break-words">
  Our Family Deluxe Room offers a spacious and comfortable setting with modern amenities, perfect for families. Enjoy cozy bedding, a seating area, and a private en-suite bathroom for ultimate relaxation.
</p>


    <Link href="/roomQuery" className="text-white inline-flex items-center bg-[indigo] rounded-lg p-2">
      Book Now 
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</div>

    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5  mx-auto flex flex-col">
  <h1 className="text-center text-3xl  text-gray-900">
  Our Family Standard Room
</h1>
    <div className="lg:w-4/6 mx-auto">
    <div className="rounded-lg overflow-hidden">
  <img
    alt="content"
    className="object-cover w-full h-auto sm:w-[1100px] sm:h-[500px]"
    src="hotelAssets/familystandard.jpeg"
  />
</div>

<div className="flex flex-col sm:flex-row mt-10 mx-5">
  <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left">
  <p className="leading-relaxed text-base sm:text-lg mb-4 break-words">
  Our Family Standard Room provides a comfortable and spacious environment with essential amenities for a relaxing family stay. Enjoy cozy bedding, a seating area, and a private en-suite bathroom for your convenience.
</p>



    <Link href="/roomQuery" className="text-white inline-flex items-center bg-[indigo] rounded-lg p-2">
      Book Now 
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</div>
<div className=" lg:hidden sm:w-1/2 text-center sm:pr-8 sm:py-8 overflow-hidden relative py-10">
  <div
    key={currentGuestIndex}
    className={`feedback-slide ${slideDirection}`}
    style={{
      transition: 'opacity 0.4s ease-in-out, transform 0.5s ease-in-out',
      opacity: slideDirection === 'slide-out-right' ? 0 : 1,
      transform:
        slideDirection === 'slide-out-right'
          ? 'translateX(100%)' // Slide out to the right
          : slideDirection === 'slide-in-left'
          ? 'translateX(0)' // Slide in from the left
          : 'translateX(-100%)', // Initial state for incoming slide
    }}
  >
  <div className="w-20 h-20 rounded-full overflow-hidden inline-flex items-center justify-center">
  <img
    className="w-full h-full object-cover object-center"
    src={guests[currentGuestIndex1].image}
    alt={guests[currentGuestIndex1].name}
  />
</div>






    <div className="flex flex-col items-center text-center justify-center">
      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
        {guests[currentGuestIndex].name}
      </h2>
      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
      <p className="text-base">{guests[currentGuestIndex].feedback}</p>
    </div>
  </div>
</div>
    </div>
  </div>
  <div className='flex flex-nowrap'>
  <div className="hidden md:block sm:w-1/2 text-center sm:pr-8">
    <div
      key={currentGuestIndex1}
      className={`feedback-slide ${slideDirection1}`}
      style={{
        transition: 'opacity 0.4s ease-in-out, transform 0.5s ease-in-out',
        opacity: slideDirection1 === 'slide-out-right' ? 0 : 1,
        transform:
          slideDirection1 === 'slide-out-right'
            ? 'translateX(100%)' // Slide out to the right
            : slideDirection1 === 'slide-in-left'
            ? 'translateX(0)' // Slide in from the left
            : 'translateX(-100%)', // Initial state for incoming slide
      }}
    >
      <img
        className="w-20 h-20 rounded-full inline-flex items-center justify-center"
        src={guests1[currentGuestIndex1].image}
        alt={guests1[currentGuestIndex1].name}
      />
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
          {guests1[currentGuestIndex1].name}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        <p className="text-base">{guests1[currentGuestIndex1].feedback}</p>
      </div>
    </div>
  </div>

  <div className="hidden md:block sm:w-1/2 text-center sm:pr-8">
    <div
      key={currentGuestIndex2}
      className={`feedback-slide ${slideDirection2}`}
      style={{
        transition: 'opacity 0.4s ease-in-out, transform 0.5s ease-in-out',
        opacity: slideDirection2 === 'slide-out-right' ? 0 : 1,
        transform:
          slideDirection2 === 'slide-out-right'
            ? 'translateX(100%)' // Slide out to the right
            : slideDirection2 === 'slide-in-left'
            ? 'translateX(0)' // Slide in from the left
            : 'translateX(-100%)', // Initial state for incoming slide
      }}
    >
      <img
        className="w-20 h-20 rounded-full inline-flex items-center justify-center"
        src={guests2[currentGuestIndex2].image}
        alt={guests2[currentGuestIndex2].name}
      />
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
          {guests2[currentGuestIndex2].name}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        <p className="text-base">{guests2[currentGuestIndex2].feedback}</p>
      </div>
    </div>
  </div>

  <div className="hidden md:block sm:w-1/2 text-center sm:pr-8">
    <div
      key={currentGuestIndex3}
      className={`feedback-slide ${slideDirection3}`}
      style={{
        transition: 'opacity 0.4s ease-in-out, transform 0.5s ease-in-out',
        opacity: slideDirection3 === 'slide-out-right' ? 0 : 1,
        transform:
          slideDirection3 === 'slide-out-right'
            ? 'translateX(100%)' // Slide out to the right
            : slideDirection3 === 'slide-in-left'
            ? 'translateX(0)' // Slide in from the left
            : 'translateX(-100%)', // Initial state for incoming slide
      }}
    >
      <img
        className="w-20 h-20 rounded-full inline-flex items-center justify-center"
        src={guests3[currentGuestIndex3].image}
        alt={guests3[currentGuestIndex3].name}
      />
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
          {guests3[currentGuestIndex3].name}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        <p className="text-base">{guests3[currentGuestIndex3].feedback}</p>
      </div>
    </div>
  </div>

  <div className="hidden md:block sm:w-1/2 text-center sm:pr-8">
    <div
      key={currentGuestIndex}
      className={`feedback-slide ${slideDirection}`}
      style={{
        transition: 'opacity 0.4s ease-in-out, transform 0.5s ease-in-out',
        opacity: slideDirection === 'slide-out-right' ? 0 : 1,
        transform:
          slideDirection === 'slide-out-right'
            ? 'translateX(100%)' // Slide out to the right
            : slideDirection === 'slide-in-left'
            ? 'translateX(0)' // Slide in from the left
            : 'translateX(-100%)', // Initial state for incoming slide
      }}
    >
      <img
        className="w-20 h-20 rounded-full inline-flex items-center justify-center"
        src={guests[currentGuestIndex].image}
        alt={guests[currentGuestIndex].name}
      />
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
          {guests[currentGuestIndex].name}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
        <p className="text-base">{guests[currentGuestIndex].feedback}</p>
      </div>
    </div>
  </div>
</div>

 
</section>
<Footer/>
 </>
  )
}

export default page
