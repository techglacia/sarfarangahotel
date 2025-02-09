import React from 'react';
import './facilities.css'

const Facilities = () => {
    return (
        <div className='mt-10 mb-4'>
            <div> </div>
            <div className='bg-blend-darken w-full h-[80vh] lg:h-[60vh] bg-opacity-50 ' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1605447610053-dbea551acf80?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat'}}>
                <div>
                  <div className="flex items-center justify-center py-10">
                    <img src="/assets/images/facility-logo.png" alt="Facility Logo" className='w-[40px]' />
                  </div>         
                </div>
                <h2 className='my-1  font-marcellus text-4xl text-white' >One of the World's Most <br />Desirable Locations</h2>
                <div className="flex flex-col items-center text-center  px-4">
  <p className="my-1 font-jost text-xl text-white">
    Providing Exceptional Amenities for a Memorable Stay, Ensuring You Enjoy Every Moment of Your Visit
  </p>
</div>
            </div>
            <div className='min-h-[100vh] w-4/5 mx-auto relative -top-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4'>
                <div className="flex flex-col items-center justify-center">
                    <div className='imageBox w-full h-[460px]' style={{backgroundImage: `url('http://localhost:3000/hotelAssets/familydeluxe.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                        <div className='imageFrame w-full h-full mx-auto border-2 -translate-x-3 translate-y-3 hover:translate-x-3 hover:-translate-y-3 border-[#EAB308] transition duration-300 ease-in-out'></div>
                    </div>
                    <h2 className='mb-2 mt-5 text-lg font-marcellus text-[#495737]'> Luxury Stay</h2>
                    <p className='font-jost my-1'>Relax and unwind in our luxurious suites, where elegance meets comfort. Indulge in personalized hospitality and exquisite amenities for a truly opulent stay</p>
                </div>
                <div className="flex flex-col items-center justify-center pt-24">
                    <div className='imageBox w-full h-[460px]' style={{backgroundImage: `url('https://thesaneadventurer.com/wp-content/uploads/2020/08/IMG-20200314-WA0049-1024x768.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                        <div className='imageFrame w-full h-full mx-auto border-2 -translate-x-3 translate-y-3 hover:translate-x-3 hover:-translate-y-3 border-[#EAB308] transition duration-300 ease-in-out'></div>
                    </div>
                    <h2 className='mb-2 mt-5 font-marcellus text-[#495737]'> Activities</h2>
                    <p className='font-jost my-1'>Experience adventure and luxury with our exclusive activities in Skardu. From scenic mountain treks to serene lake excursions, immerse yourself in nature’s breathtaking beauty</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className='imageBox w-full h-[450px]' style={{backgroundImage: `url('https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Classic_Veg_Momo_Recipe_Dumplings_4.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                        <div className='imageFrame w-full h-full mx-auto border-2 -translate-x-3 translate-y-3 hover:translate-x-3 hover:-translate-y-3 border-[#EAB308] transition duration-300 ease-in-out'></div>
                    </div>
                    <h2 className='mb-2 mt-5 font-marcellus text-[#495737]'> Fine Dining</h2>
                    <p className='font-jost my-1'>Enjoy delicious meals at our hotel’s restaurants. Savor expertly crafted dishes and a variety of flavors in a stylish and comfortable setting</p>
                </div>
            </div>
        </div>
    );
};

export default Facilities;
