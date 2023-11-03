import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Slider1 from "../assets/Images/Slider1.png";
import Slider2 from "../assets/Images/Slider2.png";
import Slider3 from "../assets/Images/Slider3.png";
import Slider4 from "../assets/Images/Slider4.png";
import Slider5 from "../assets/Images/Slider5.png";
import "../global.css";

const HotelSlider = () => {
  return (
    <Carousel infiniteLoop autoPlay>
      <div >
        <img src={Slider1} />
         {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={Slider2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={Slider3} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={Slider4} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={Slider5} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
    </Carousel>
  );
};

export default HotelSlider;
