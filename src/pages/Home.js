import React from "react";
import FeaturedRooms from "../components/FeaturedRooms";
import Bannerr from "../components/Bannerr";
import HomeType from "../components/HomeType";
import Footer from "../components/Footer";
import AboutUs from "../components/About/About";


const home = () => {
  return (
    <>
     
      <Bannerr></Bannerr>
      <HomeType > </HomeType>
      <FeaturedRooms />
   
      <AboutUs></AboutUs>
      <Footer></Footer>
  
    </>
  );
};

export default home;
