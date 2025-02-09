"use client";
import React from 'react'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Title from '../../../../public/shared/title/Title'; 
import global from '../../globals.css';

function page() {
 // Array of guest data (name, image, and feedback)
 const guests = [
  {
    name: "Hadia Majid",
    image: "customer1/1.png",
    feedback: "The Standard Room was clean, comfortable, and well-equipped. A perfect choice for a relaxing and hassle-free stay!",
  },
  {
    name: "Kashif Ahsan",
    image: "customer1/2.jpeg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "Hassan Ahmed",
    image: "customer1/3.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "Brian Martin",
    image: "customer1/4.jpeg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "Jane Smith",
    image: "customer1/5.jpeg",
    feedback: "Great location and amazing hospitality. The room had everything we needed for a comfortable stay.",
  },
  // Add more guests as needed
];
 const guests1 = [
  {
    name: "yasir",
    image: "standardCustomer/2.jpeg",
    feedback: "The Standard Room was clean, comfortable, and well-equipped. A perfect choice for a relaxing and hassle-free stay!",
  },
  {
    name: "yasir2",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "yasir3",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "yasir4",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "yasir5",
    image: "standardCustomer/3.jpeg",
    feedback: "Great location and amazing hospitality. The room had everything we needed for a comfortable stay.",
  },
  // Add more guests as needed
];
 const guests2 = [
  {
    name: "asif",
    image: "standardCustomer/2.jpeg",
    feedback: "The Standard Room was clean, comfortable, and well-equipped. A perfect choice for a relaxing and hassle-free stay!",
  },
  {
    name: "asif2",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "asif3",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "asif4",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "asif5",
    image: "standardCustomer/3.jpeg",
    feedback: "Great location and amazing hospitality. The room had everything we needed for a comfortable stay.",
  },
  // Add more guests as needed
];
 const guests3 = [
  {
    name: "abid1",
    image: "standardCustomer/2.jpeg",
    feedback: "The Standard Room was clean, comfortable, and well-equipped. A perfect choice for a relaxing and hassle-free stay!",
  },
  {
    name: "abid2",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "abid3",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "abid4",
    image: "customer/1.jpeg.jpg",
    feedback: "Absolutely loved the room! The decor was beautiful, and the bed was incredibly comfortable. Will definitely stay again!",
  },
  {
    name: "abid5",
    image: "standardCustomer/3.jpeg",
    feedback: "Great location and amazing hospitality. The room had everything we needed for a comfortable stay.",
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
        <section className='mt-20 mb-10'>
        <Title heading="Guest Feedback" subheading="See Why Our Customers Love Us"></Title>
             
            </section>
 



   

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

 


 </>
  )
}

export default page