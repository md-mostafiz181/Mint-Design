import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner-part">
      <div className="banner-main">
        <video autoPlay="autoplay" loop="loop" muted="muted" playsInline>
          <source src="https://wade.qodeinteractive.com/wp-content/uploads/2022/07/20220720-111009-134-1.mp4"></source>
        </video>
        <div className="overlay flex justify-center items-center">
          <div>
            <h1 className="lg:text-7xl sm:text-1xl primaryFont font-bold text-[#83DEB2]">Acclaimed marketing talent</h1>
            <h3 className="secondaryFont lg:text-7xl sm:text-xl font-bold text-[#83DEB2] text-center mt-2">backing your business growth</h3>
            <div className="flex justify-center mt-5">
            <button className="btn-work primaryFont font-normal text-2xl relative me-5">Our work <FaArrowRight className="absolute right-2 top-6 "></FaArrowRight></button>

            <button className="btn-contact primaryFont font-normal text-2xl relative">Contact Us <FaArrowRight className="absolute right-2 top-6"></FaArrowRight></button>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
