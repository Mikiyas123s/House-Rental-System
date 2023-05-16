
import React from 'react'
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

import {Banerone,Banerfoyr,Banertre,Banertwo} from "../assets/index";


const Bannerr = () =>  {
    const [currentSlide, setCurrentSlide] = useState(0);

 


  const prevSlide =()=>{
          setCurrentSlide(currentSlide ===0?3:(prev)=>prev-1);
  }
  const nextSlide =()=>{
      setCurrentSlide(currentSlide ===3?0:(prev)=>prev+1);
};

return (
  <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
          <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} 
          className='w-[400vw] h-full flex transition-transform duration-1000'>
             <img 
             className="w-screen h-full object-cover"
             src={Banerone}
             loading="priority"
             />
              <img 
             className="w-screen h-full object-cover"
             src={Banerfoyr}
         
             />
              <img 
             className="w-screen h-full object-cover"
             src={Banertre}
            
             />
              <img 
             className="w-screen h-full object-cover"
             src={Banertwo}
         
             />
          </div>
          <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-4'>
                           <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center
                           justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                           active:bg-gray-900 duration-300'>
                           <FaAngleLeft/></div>
                           <div  onClick={nextSlide}  className='w-14 h-12 border-[1px] border-gray-700 flex items-center
                           justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                           active:bg-gray-900 duration-300'><FaAngleRight/></div>
          </div>
      </div>
  
      </div>
)
}

export default Bannerr