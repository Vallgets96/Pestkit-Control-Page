import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { useState } from "react";
import { FaLinkedinIn, FaSpider, FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoChevronUpOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { GiCancel } from "react-icons/gi";

function Navbar() {
  const [drop, setDrop] = useState(false);
  const [nav, setNav] = useState(false);

  function taptap() {
    setDrop(!drop);
  }

  function movement() {
    setNav(!nav);
  }

  

  return (
    <nav className="z-50 ">
      <div className="bg-[#FDF001] w-full h-11  md:flex hidden items-center justify-between lg:p-7 xl:px-16 ">
        <div className="flex  items-center">
          <p className="text-[#555555] text-[12px] flex gap-2 items-center p-4 pr-2 lg:text-[16px] ">
            <IoLocationSharp className="text-[15px] lg:text-[19px] text-black " />
            123 Street, CA, USA
          </p>
          <p className="text-[#555555] text-[12px] flex border-t-[1px] gap-2 items-center p-4 pr-2 lg:text-[16px] ">
            <BsFillTelephoneFill className="text-[15px] text-black lg:text-[16px]" />
            +012 345 6792
          </p>
          <p className="text-[#555555] text-[12px] flex border-t-[1px] gap-2 items-centern p-4 pr-2 lg:text-[16px] ">
            <IoIosMail className="text-[18px] lg:text-[23px] text-black " />
            Pestkit@foterex.com
          </p>
        </div>
        <div className="relative flex items-center">
          <FaSearch className="absolute left-32 lg:left-44 xl:left-[530px]  text-[15px] opacity-75" />
          <div className="rounded-3xl px-2 xl:pr-[330px] xl:px-[30px] py-[3px] lg:py-[6px]  bg-white  ">
            <input
              className=" outline-none text-[12px] lg:text-[16px] xl:text-[18px]"
              type="text"
              placeholder="Search here"
            ></input>
          </div>
        </div>
        <div className="flex text-black items-center gap-3  mr-5 lg:gap-4">
          <div className="text-black text-[22px] lg:text-[29px] mr-1 ">|</div>
          <FaXTwitter className="text-[14px] lg:text-[17px] " />
          <ImFacebook className="text-[14px] lg:text-[17px]" />
          <FaLinkedinIn className="text-[14px] lg:text-[17px]" />
        </div>
      </div>
      <div className="bg-black flex items-center justify-between p-4 ">
        <div className="flex items-center font-bold ">
          <h1 className="text-[32px] md:text-[38px] lg:text-[44px] xl:text-[49px] lg:pl-7 xl:pl-16 text-[#FDF001] font-bold">
            Pest<span className="text-white">Kit</span>
          </h1>
          <FaSpider className="text-[37px] md:text-[43px] xl:text-[48px] hover:rotate-180 transition-all duration-700 text-[#FDF001] ml-[7px]" />
        </div>
        <div className="bg-[#FDF001] lg:hidden flex justify-center items-center  w-11 h-9 rounded-lg">
          <FaBars className="  text-[20px]" onClick={movement} /> 
        </div>

        <div className=" text-white hidden lg:flex xl:text-[19px] xl:gap-14 gap-9 mr-5">
        <Link className=" transition-all hover:text-[#FDF001] cursor-pointer " to="Hero"
        spy={true}
        smooth={true} 
        offset={-50} 
        duration={2000}>Home</Link>

          <Link className="transition-all hover:text-[#FDF001] cursor-pointer "  to="About"
        spy={true} 
        smooth={true} 
        offset={-180} 
        duration={2000}>About
        </Link>

        <Link className="transition-all hover:text-[#FDF001] cursor-pointer" to="Services"
        spy={true} 
        smooth={true} 
        offset={-60} 
        duration={2000}>Services
        </Link>

        <Link className="hover:text-[#FDF001] cursor-pointer" to="Projects"
        spy={true} 
        smooth={true} 
        offset={-150} 
        duration={2000}>Projects
        </Link>
          <div>
            <button
              className="flex items-center hover:text-[#FDF001]"
              onClick={taptap}
            >
              Pages
              <div >{drop ? <IoChevronUpOutline /> : <IoChevronDownOutline />}</div>
            </button>
            <div
              className={
                drop
                  ? "flex absolute z-50  flex-col justify-center gap-2 xl:gap-4 transition-all duration-1500 delay-75  bg-[#FDF001] w-[140px] h-[140px] xl:h-[230px] xl:w-[165px] xl:text-[19px] mt-3 rounded-md  text-black font-medium p-4  pt-10  pb-10 text-[15px] "
                  : "-top-full hidden transition-all duration-1000 text-black"
              }
            >
          <Link className="hover:font-semibold transition-all duration-300 xl:text-[18px] cursor-pointer" to="Pricing Plan"
        spy={true} 
        smooth={true}  
        offset={-100} 
        duration={2000}>Pricing Plan
        </Link>
        <Link className="hover:font-semibold transition-all duration-300 cursor-pointer xl:text-[18px]" to="Blog Post"
        spy={true} 
        smooth={true}
        offset={-100}  
        duration={2000}>Blog post
        </Link>
        <Link className="hover:font-semibold transition-all duration-300 cursor-pointer xl:text-[18px]" to="Team Members"
        spy={true} 
        smooth={true}  
        offset={-100}
        duration={2000}>Team Members
        </Link>
        <Link className="hover:font-semibold transition-all duration-300 cursor-pointer xl:text-[18px]" to="Testimonial"
        spy={true} 
        smooth={true}  
        offset={-100}
        duration={2000}>Testimonial
        </Link>
        
            </div>
            
          </div>
          <Link className="hover:text-[#FDF001] cursor-pointer" to="Contact"
            spy={true} 
            smooth={true}  
            duration={4000}>Contact
        </Link>
        </div>
      </div>

      <div
        className={
          nav
            ? " top-17 pt-3 gap-6 pl-5 pb-6 pr-4 bg-black text-white xl:text-[19px] flex flex-col justify-center w-full  transition-all duration-1000 ease-in-out "
            : "fixed -top-full pt-3 gap-6 pb-5 pl-5 bg-black text-white justify-center w-full h-[120px] rounded-md transition-all duration-500 ease-in-out"
        }
      >
        <a className="hover:text-[#FDF001] ">Home</a>
        <a className="hover:text-[#FDF001]">About</a>
        <a className="hover:text-[#FDF001]">Services</a>
        <a className="hover:text-[#FDF001]">Projects</a>
        <div>
          <button className="flex items-center" onClick={taptap}>
            Dropdown
            <div>{drop ?   <IoChevronUpOutline /> : <IoChevronDownOutline />}</div>
          </button>
        </div>
        <div
          className={
            drop
              ? "flex flex-col justify-center gap-2 bg-[#FDF001] w-full h-[120px] rounded-md transition-all duration-1000 ease-in-out text-black font-medium p-5 pt-10 pb-10 text-[15px]"
              : "-top-full hidden transition-all duration-300 ease-in-out text-black"
          }
        >
          <a>Pricing Plan</a>
          <a>Blog post</a>
          <a>Team Members</a>
          <a>Testimonial</a>
        </div>
        <a className="hover:text-[#FDF001]">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
