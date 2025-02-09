"use client";

import dynamic from "next/dynamic";

const Location = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="text-center">
        <h2 className="text-[#495737] font-extrabold text-5xl">Where to Find Us</h2>
        <p className="text-gray-600">
          Discover us in a Prime Location. The Perfect Spot for Your Next Stay
        </p>
      </div>

      {/* Google Maps Embed */}
      <div className="min-h-[70vh] mt-10 mb-10 w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.459354996124!2d75.5958686!3d35.294565999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e46882b5cfced3%3A0x659bae933cee3930!2sHotel%20Sarfaranga%20skardu!5e0!3m2!1sen!2s!4v1739113211469!5m2!1sen!2s"
          className="w-full h-[70vh] rounded-lg border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Location), { ssr: false });
