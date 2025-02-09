import React from 'react';
import Title from '../../../../public/shared/title/Title'; // Adjust the path accordingly based on your folder structure



const Services = () => {
  const service = [
    {
      image: "/assets/images/pickup.png",
      heading: "Pickup Service",
      subheading: "Convenient pickup service for all your needs."
    },
    {
      image: "/assets/images/food-tray.png",
      heading: "Buffet Breakfast",
      subheading: "Delicious meals and a complimentary breakfast buffet."
    },
    {
      image: "/assets/images/customer-service.png",
      heading: "Customer Service",
      subheading: "24/7 customer support for your convenience."
    },
    {
      image: "/assets/images/wifi.png",
      heading: "Free WiFi",
      subheading: "Stay connected with our high-speed WiFi."
    },
    {
      image: "/assets/images/washing-machine.png",
      heading: "Laundry Service",
      subheading: "Efficient laundry services to keep your clothes fresh."
    },
   
  ];

  return (
    <div className='w-full my-20'>
      <Title heading="Discover Our Services" subheading="All the Essentials for a Cozy and Comfortable Stay" />
      <div className='pt-10'>
        <div className="mx-auto w-11/12 lg:w-5/6">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black">
              {service.map((item, index) => (
                <div key={index} className='border border-black px-6 py-16 flex flex-col justify-center items-center'>
                  <div className=''>
                    <img src={item.image} alt={item.heading} className='w-[60px]' />
                  </div>  
                  <h1 className='font-marcellus text-xl text-center text-[#495737] my-1 font-bold'>{item.heading}</h1>
                  <p className='font-jost text-center'>{item.subheading}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
