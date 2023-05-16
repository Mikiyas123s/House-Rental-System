import React from 'react';
import './HomeType.css';
import {Condo,FamilyHome,Duplex,Appartment} from "../assets/index";
import Title from './Title';

const HomeType = () => {
  return (
    <div >
        <br></br><br></br>
        <div><Title title="Home Types "/></div>
 
    <div className=' flex justify-between items-center'>
    <div className='card-container'>
       
       <div className='image-container'>
           <img src={FamilyHome} alt=''></img>

       </div>
       <div className='card-content'>
       <div className='card-title'>
        <h3 className='text-2xl font-semibold '>Family House</h3>
       </div>
       <div className='card-body'>
        <p className='text-2xl  '>8 Properties</p>
       </div>
       </div>

    </div>
    <div className='card-container'>
       
       <div className='image-container'>
           <img src={Duplex} alt=''></img>

       </div>
       <div className='card-content'>
       <div className='card-title'>
        <h3 className='text-2xl font-semibold '>Duplex </h3>
       </div>
       <div className='card-body'>
        <p className='text-2xl  '>9 Properties</p>
       </div>
       </div>

    </div>
    <div className='card-container'>
       
       <div className='image-container'>
           <img src={Appartment} alt=''></img>

       </div>
       <div className='card-content'>
       <div className='card-title'>
        <h3 className='text-2xl font-semibold '> Appartment</h3>
       </div>
       <div className='card-body'>
        <p className='text-2xl  '>8 Properties</p>
       </div>
       </div>

    </div>
    <div className='card-container'>
       
       <div className='image-container'>
           <img src={Condo} alt=''></img>

       </div>
       <div className='card-content'>
       <div className='card-title'>
        <h3 className='text-2xl font-semibold '>Condominium</h3>
       </div>
       <div className='card-body'>
        <p className='text-2xl  '>8 Properties</p>
       </div>
       </div>

    </div>
    </div>
  <br></br>  <br></br>  <br></br>
    </div>
    
  )
}

export default HomeType