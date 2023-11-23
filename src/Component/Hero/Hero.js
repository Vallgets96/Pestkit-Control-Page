import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import images from "./Hdata";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Arrow = ({ direction, onClick }) => (
  <div
    className={`absolute ${
      direction === "left" ? "left-4" : "right-4"
    } top-1/2 transform -translate-y-1/2 cursor-pointer`}
    onClick={onClick}
    style={{
      zIndex: 1,
      // Set your desired background color
      // Set your desired height
      // Set your desired width
    }}
  >
    {direction === "left" ? (
      <SlArrowLeft
        className="text-white hidden md:block md:p-2 lg:p-1"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        size={45}
      />
    ) : (
      <SlArrowRight
        className="text-white hidden md:block lg:p-1 md:p-2" data-aos="fade-left"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        size={45}
      />
    )}
  </div>
);

function SliderComponent() {
  const [activeDot, setActiveDot] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
          bottom: "20px", // Adjust the position as needed
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {dots.map((dot, index) => (
            <li key={index}>{dot}</li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          margin: "0 8px",
          borderRadius: "50%",
          cursor: "pointer",
          backgroundColor: i === activeDot ? "black" : "yellow", // Set your desired active dot color
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {images.map(function (val) {
          return (
            <div key={val.id}>
              <div className="relative" id="Hero">
                <img
                  src={val.image}
                  alt="img1"
                  className="z-0 h-[450px] lg:h-[600px] w-full xl:h-[800px] "
                />
                <div className="bg-black inset-0 opacity-70 absolute"></div>
                <div className="absolute inset-0 text-white flex flex-col justify-center xl:px-24  ">
                  <h1 className="text-[20px] font-bold ml-[96px] mb-2 md:text-[23px] md:ml-[115px] lg:text-[24px] xl:text-[30px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
                    No 1 Pest Control Services
                  </h1>
                  <h1 className="text-[41px] font-extrabold px-[96px] md:text-[60px] md:px-[110px] md:mb-4 lg:text-[70px] xl:text-[84px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
                    Enjoy Your Home Totally Pest Free
                  </h1>
                  <div className="px-[95px] md:px-[115px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
                    <button className="bg-[#FDF001] p-4 rounded-full w-[170px] md:w-[190px] shadow-lg font-semibold mt-5 text-black lg:h-[68px] lg:w-[200px] lg:text-[18px] xl:text-[21px] xl:w-[230px] xl:h-[75px]">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderComponent;
