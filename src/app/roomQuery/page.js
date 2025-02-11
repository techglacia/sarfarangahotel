'use client';
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../navbar/Navbar";

const BookingInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomCategory: "",
    checkIn: "",
    checkOut: "",
    noOfGuests: "",
    specialRequest: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Format checkIn and checkOut dates
    const formattedCheckIn = new Date(formData.checkIn).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const formattedCheckOut = new Date(formData.checkOut).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  
    // Update formData with formatted dates
    const updatedFormData = {
      ...formData,
      checkIn: formattedCheckIn,
      checkOut: formattedCheckOut,
    };
  
    emailjs
      .send(
          "service_96jc2ib", // Replace with your EmailJS service ID
        "template_lqfhyah", // Replace with your EmailJS template ID// Replace with your EmailJS template ID
        updatedFormData,
        "u8EOXWi52kOI1bOvf" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Booking inquiry sent successfully!");
          setFormData({
            name: "",
            email: "",
            roomCategory: "",
            checkIn: "",
            checkOut: "",
            noOfGuests: "",
            specialRequest: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send booking inquiry. Please try again.");
        }
      );
  };
  

  return (
   <> <Navbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 my-12">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Booking Inquiry</h2>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Room Category</label>
            <select
              name="roomCategory"
              value={formData.roomCategory}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              required
            >
              <option value="">Select Room Category</option>
              <option value="Family Suite Room">Family Suite Room- PKR 12,000 </option>
              <option value="Family Deluxe Room">Family Deluxe Room- PKR 7,000 </option>
              <option value="Deluxe Room">Deluxe Room- PKR 8,000</option>
              <option value="Family Standard Room">Family Standard Room- PKR 6,000 </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Check-In Date</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Check-Out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Number of Guests</label>
            <input
              type="number"
              name="noOfGuests"
              value={formData.noOfGuests}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Special Requests</label>
            <textarea
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Send Inquiry
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </div>
    </div>
    </>
  );
};

export default BookingInquiryForm;
