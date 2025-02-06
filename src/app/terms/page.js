import Head from 'next/head';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <Head>
        <title>Hotel Sarfaranga | Best Stay in Skardu - Cozy & Comfortable</title>
        <meta name="description" content="Enjoy a relaxing stay at Hotel Sarfaranga in Skardu. Cozy rooms, breathtaking views, and warm hospitality await you." />
        <meta name="keywords" content="Hotel Sarfaranga, Skardu hotels, best hotels in Skardu, cozy hotel in Skardu, peaceful stay in Skardu" />
        <meta property="og:title" content="Hotel Sarfaranga | Cozy Stay in Skardu" />
        <meta property="og:description" content="Looking for a peaceful stay in Skardu? Hotel Sarfaranga offers comfortable rooms and great service with amazing views." />
        <meta property="og:image" content="https://www.hotelsarfaranga.com/images/hotel.jpg" />
        <meta property="og:url" content="https://hotelsarfaranga.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hotel Sarfaranga | Cozy Stay in Skardu" />
        <meta name="twitter:description" content="Book your stay at Hotel Sarfaranga in Skardu, with comfortable rooms and stunning views." />
        <meta name="twitter:image" content="https://www.hotelsarfaranga.com/images/hotel.jpg" />
      </Head>

      <div className="container mx-auto p-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-6">Terms and Conditions</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium mb-4">Room Rates</h2>
          <p>Your room rate includes:</p>
          <ul className="list-disc pl-5">
            <li>Accommodation with breakfast</li>
            <li>Access to hotel facilities</li>
            <li>Complimentary Wi-Fi</li>
            <li>Taxes and service charges</li>
            <li>Transfers from Skardu airport to Hotel Sarfaranga (if pre-arranged)</li>
          </ul>
          <p>Room rate excludes:</p>
          <ul className="list-disc pl-5">
           
            <li>Optional tours and activities</li>
          </ul>

          <h2 className="text-xl font-medium mt-6 mb-4">Payment</h2>
          <p>We require a deposit to confirm your booking. The remaining balance is due at check-in. Payment can be made by cash, credit card, or bank transfer.</p>

          <h2 className="text-xl font-medium mt-6 mb-4">Cancellation Policy</h2>
          <p>We understand that plans change, so we offer a flexible cancellation policy:</p>
          <ul className="list-disc pl-5">
            <li>Free cancellation up to 2 days before check-in.</li>
            <li>A 25% fee will apply if cancelled within 2 days of check-in.</li>
            <li>No refunds for cancellations on the day of arrival or no-shows.</li>
          </ul>

          <h2 className="text-xl font-medium mt-6 mb-4">Arrival Information</h2>
          <p>We recommend arriving during daylight hours to avoid travel difficulties. If you plan to arrive after dark, please let us know in advance so we can assist with your arrival.</p>

          <h2 className="text-xl font-medium mt-6 mb-4">Additional Information</h2>
          <p>If you need to modify your reservation, please contact us at least 24 hours before your arrival date. We'll do our best to accommodate changes based on availability.</p>

          <h2 className="text-xl font-medium mt-6 mb-4">Thank You for Choosing Hotel Sarfaranga!</h2>
          <p>We are excited to welcome you to Hotel Sarfaranga in Skardu! If you have any questions or need help with your booking, please don't hesitate to contact us.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
