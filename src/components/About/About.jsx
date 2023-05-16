import React from "react"
import { Appartment } from "../../assets";
import "./About.css"
import Title from "../Title";
const AboutUs = () => {
  return (
    <>
      <section className='about'>
      <Title title="About" />
        <div className='main'>
            <img src={Appartment}/>
          <div className='about-text'>
          <Title title="Our Agency Story" />
               

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <br></br>  <br></br>    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          
          </div>
         
        </div>
      </section>
    </>
  )
}

export default AboutUs
