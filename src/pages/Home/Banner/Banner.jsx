import React from 'react';
import b6 from '../../../assets/b5.webp'
import b2 from '../../../assets/b3.webp'
// import b3 from '../../../assets/b4.jpg'


import b1 from '../../../assets/Banner-1.png'



import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
      <div className='border border-black'>
        <Carousel autoPlay={true} infiniteLoop={true} >
                <div>
                    <img className=' w-full' src={b1}/>
                    
                </div>
                <div>
                    <img className='h-1/2 w-full'  src={b2} />
                   
                </div>
                {/* <div>
                    <img className=' w-full' src={b3} />
                   
                </div> */}
               
               
                <div>
                    <img className='h-1/2 w-full' src={b6} />
                   
                </div>
                
            </Carousel>
         </div>
      
    );
};

export default  Banner;