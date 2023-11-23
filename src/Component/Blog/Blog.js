import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./Data";
import { RiContactsFill } from "react-icons/ri";
import {  FaCalendarAlt, FaComments } from "react-icons/fa";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import AOS from 'aos';


AOS.init();




const Arrow = ({ direction, onClick }) => (
  <div
    className={`absolute ${direction === "left" ? "left-4" : "right-4"} top-1/2 transform -translate-y-1/2 cursor-pointer`}
    onClick={onClick}
    style={{
      zIndex: 1,
      top:1,
      padding:10,
      
      
      
    }}
  >
    {direction === "left" ? (
      <IoArrowBackSharp className="text-black  bg-[#FDF001] h-[34px] w-[55px] lg:w-[80px] lg:h-[45px] md:h-[37px] md:w-[65px] rounded-e-full rounded-s-lg  p-2  " data-aos="fade-right"  data-aos-duration="2000" size={35} />
    ) : (
      <IoArrowForwardSharp  className="text-black  bg-[#FDF001] h-[34px] w-[55px] lg:w-[80px] lg:h-[45px] md:h-[37px] md:w-[65px]  rounded-s-full rounded-lg   p-2" data-aos="fade-left"  data-aos-duration="2000" size={35} />
    )}
  </div>
);

function SliderComponent() {
    
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,

    responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="p-5 " >
       <div className="flex flex-col justify-center items-center text-center mt-32" id="Blog Post" data-aos="fade-up"  data-aos-duration="1500">
              <h2 className="border-[#FDF001] border-[3px] w-[160px] rounded-2xl  flex justify-center text-[20px] font-semibold">Our Blog</h2>
              <h1 className="text-[30px] xl:text-[45px] lg:text-[42px] md:text-[39px] font-extrabold pt-3 p-4 mb-10">Latest Blog & News</h1>
            </div>
      <Slider {...settings}>
        {
            Data.map(function(val){
                return(
                    <div>
                        <div key={val.id}>
                            <div className=" p-8  flex" data-aos="fade-up"  data-aos-duration="1500">
                                <div className="md:w-[340px] bg-[#F5F6F6] shadow-2xl  rounded-xl lg:w-[430px]">
                                    <div><img src={val.image} className="rounded-t-xl" alt="img1" /></div>
                                    <div className="flex justify-between items-center p-4 xl:px-6 pb-1">
                                        <h1 className="flex items-center lg:text-[18px] "><RiContactsFill />{val.name}</h1>
                                        <h1 className="flex items-center lg:text-[18px]"><FaCalendarAlt />{val.date}</h1>
                                    </div>
                                    <h1 className="text-[22px] lg:text-[26px] font-semibold p-4 xl:px-5 pb-1 pt-3">{val.title}</h1>
                                    <p className="p-4 pt-2  xl:px-6 lg:text-[17px]">{val.para}</p>
                                    <div className="flex justify-between items-center bg-[#FDF001] p-4 xl:p-5 rounded-b-xl">
                                        <h2 className="lg:text-[18px]">{val.b1}</h2>
                                        <h2 className="flex items-center lg:text-[18px]"><FaComments />{val.b2}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </Slider>
    </div>
  );
}

export default SliderComponent ;
