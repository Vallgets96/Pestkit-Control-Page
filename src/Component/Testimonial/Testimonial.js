import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";
import { BsTriangleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import { useState } from "react";

import Test from "./Testdata";
import AOS from 'aos';
 
AOS.init();


const Arrow = ({ direction, onClick }) => (
  <div
    className={`absolute ${direction === "left" ? "left-4" : "right-4"} top-1/2 transform -translate-y-1/2 cursor-pointer`}
    onClick={onClick}
    style={{
      zIndex: 1,
      bottom:10,
      padding:23
      
      
      
      
    }}
  >
    {direction === "left" ? (
      <IoArrowBackSharp className="text-black  bg-[#FDF001]  xl:w-[80px] xl:h-[45px] lg:w-[50px] lg:h-[35px]    rounded-s-full md:block p-2  " size={35}   data-aos="fade-right"  data-aos-duration="5000"/>
    ) : (
      <IoArrowForwardSharp  className="text-black  bg-[#FDF001] xl:w-[80px] xl:h-[45px] lg:w-[50px] lg:h-[35px] rounded-e-full md:block p-2" size={35}  data-aos="fade-left"  data-aos-duration="5000"/>
    )}
  </div>
);

export default function Testimonal(){
  const [activeDot, setActiveDot] = useState(0);

    const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    speed:1600,
    autoplaySpeed: 3000,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    beforeChange: (current, next) => {
      setActiveDot(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          bottom:-12,
          
        }}
      >
        <ul className="xl:mr-[185px] md:mr-[100px] lg:mr-[160px]" style={{ listStyle: "none",padding:0,  }}>
          {dots.map((dot, index) => (
            <li key={index}>{dot}</li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
    style={{
      width: "15px",
      height: "15px",
      margin: "0 10px",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.5s",
      backgroundColor: i === activeDot ? "#FDF001" : "gray",
    }}  data-aos="fade-up"  data-aos-duration="900"
  />
    ),

    responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            dots:true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true
          }
        }
      ]
  };

    return(
        <div className="relative overflow-hidden">
            <div className="flex flex-col justify-center items-center text-center mt-32"  data-aos="fade-up"  data-aos-duration="900">
                <h2 className="border-[#FDF001] border-[3px] w-[160px] rounded-2xl flex justify-center text-[20px]  font-semibold" id="Testimonial">Testimonal</h2>
                <h1 className="text-[30px] xl:text-[45px] lg:text-[42px] md:text-[39px] font-extrabold pt-3 p-10">What Client Say About Our Services</h1>
            </div>

            <Slider {...settings} className=" lg:px-[90px] xl:px-28 md:px-[45px] " >
                {
                    Test.map(function(val){
                        return(
                        <div className="flex"  data-aos="fade-up"  data-aos-duration="900">
                        <div >
                           <div className=" px-[93px] md:px-[50px] text-[20px] "> <p className="bg-[#F5F6F6] text-[#555555] p-6 md:p-8">{val.para}</p></div>
                           <div className="text-[#F5F6F6] rotate-180 flex justify-center text-[60px] -mt-4 mr-32"><BsTriangleFill/></div>
                           <div className="flex justify-center items-center gap-4 p-8 pt-3" ><img className='rounded-full h-[66px] w-[66px]' src={val.image} alt="test"></img>
                                <div className=" flex flex-col">
                                    <h1 className="text-[21px]  font-semibold">Richard</h1>
                                    <h2 className="text-[#555555]">Marketing head</h2>
                                    <p className="text-[#FDF001] text-[22px] flex"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                                </div>
                           </div>
            
            
                           <div className="relative text-[17px] bottom-[90px] left-[105px]  "><BsFillCircleFill className="relative  text-[#FDF001] text-[25px]"/><BiSolidQuoteAltLeft className='absolute inset-y-1 left-[3px]' /></div>
                        </div>
            
                        </div>
                    )})
                }
            </Slider>
            
           
            
            

        </div>
    )}
