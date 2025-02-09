import React from 'react'
import Navbar from '../../../public/shared/navbar/Navbar'
import Footer from '../footer/Footer'

function page() {
  return (
    <div> 
        <Navbar/>
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
  y 15-20 minutes from Skardu Airport. Surrounded by stunning landscapes, guests can easily explore
   nearby attractions like Blind Lake,
   Shigar, Sarfanga, and Kachura Lake, all within 15 to 40 minutes' drive.
  </p>
</div>

 
    </div>
    <Footer/>
    </div>
  )
}

export default page