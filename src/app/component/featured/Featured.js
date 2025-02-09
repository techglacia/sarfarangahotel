'use client';

import Link from 'next/link';
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import "./FeaturedRoom.css";

const FeaturedRooms = () => {
    return (
        <div>
            <div className='text-center py-5'>
                <h2 className='text-[#495737] font-extrabold text-5xl'>Featured <span className='text-[#E1AF55]'>Rooms</span></h2>
                <p className='text-gray-600'>The forest paradise of warmth, tranquility, and restoration</p>
            </div>
            
            <Marquee>
                {['https://i.ibb.co/NjFDWmg/17.jpg', 'https://i.ibb.co/JFzQHH0/15.jpg', 'https://i.ibb.co/yqWRWcQ/20.jpg', 'https://i.ibb.co/JQHNdL7/ig5.jpg'].map((img, index) => (
                    <div key={index} className="image-box w-[450px] h-[350px] bg-no-repeat bg-cover bg-center border-none flex items-center justify-center" style={{ backgroundImage: `url(${img})` }}>
                        <div className='book-button'>
                            <Link href='/rooms'>
                                <button className="btn text-white bg-[#E1AF55] hover:bg-yellow-500 rounded-none mx-2 border-none my-5">Book A Room Now</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default FeaturedRooms;
