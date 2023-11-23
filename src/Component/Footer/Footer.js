import { BsFillCircleFill } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaCheck, FaSpider , FaInstagram} from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import bg1 from '../../img/carousel-2.jpg'
import React from 'react'
import AOS from 'aos';
 
AOS.init();

export const Footer = () => {
  return (
    <div>
    <div className='mt-32 '>
    <div className=' relative h-[980px] md:h-[600px] lg:h-[430px] xl:h-[450px] bg-cover  ' style={{ backgroundImage:`url(${bg1})`}} id="Contact" data-aos="fade-up"  data-aos-duration="1200">
    <div className='bg-black h-full opacity-60'></div>
    <div className='absolute inset-0 flex flex-col gap-8 md:grid md:grid-cols-2 md:mt-4 px-16 lg:grid-cols-4  pt-14'>
        <div data-aos="fade-up"  data-aos-duration="1200">
        <h1 className='text-white text-[22px] xl:text-[27px] font-semibold'>About Pestkit</h1>
        <div className="flex flex-col gap-3 mt-6">
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px]'>Nostrud exertation ullamco labor nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px]'>Pestkit &copy; 2023 All Right Reserved.</p>
        </div>
        </div>

        <div className="md:pl-10" data-aos="fade-up"  data-aos-duration="1200" >
        <h1 className='text-white text-[22px] xl:text-[27px] font-semibold'>Usefull Link</h1>
        <div className="flex flex-col gap-3 mt-6 ">
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px] flex gap-2 items-center '><FaCheck/>About Us</p>
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px] flex gap-2 items-center '><FaCheck/>Contact Us</p>
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px] flex gap-2 items-center '><FaCheck/>Our Service</p>
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px] flex gap-2 items-center '><FaCheck/>Terms & Condition</p>

        </div>
        </div>

        <div className="md:mb-[190px] " data-aos="fade-up"  data-aos-duration="1200">
        <h1 className='text-white text-[22px] xl:text-[27px] font-semibold'>Services Link</h1>
        <div className="flex flex-col gap-3 mt-6">
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px] flex gap-2 items-center '><FaCheck/>Apartment Cleaning</p>
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px] flex gap-2 items-center '><FaCheck/>Office Cleaning</p>
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px] flex gap-2 items-center '><FaCheck/>Car Washing</p>
        <p className='text-[#FFFFFFB3] text-[16px] xl:text-[18px] flex gap-2 items-center '><FaCheck/>Green Cleaning</p>

        </div>
        </div>

        <div className="md:pl-10 lg:pl-0" data-aos="fade-up"  data-aos-duration="1200">
        <h1 className='text-white text-[22px] xl:text-[27px] font-semibold'>Contact Us</h1>
        <div className="flex flex-col mt-6">
        <p className='text-[#FFFFFFB3] text-[16px] lg:text-[14px] xl:text-[18px]  flex gap-3 items-center p-4 pt-0'><IoLocationSharp className="text-[23px]"/>123 Street, CA, USA</p>
        <p className='text-[#FFFFFFB3] text-[16px] lg:text-[14px] xl:text-[18px] flex border-t-[1px] gap-3 items-center p-4 '><BsFillTelephoneFill className="text-[20px]"/>+012 345 6792</p>
        <p className='text-[#FFFFFFB3] text-[16px] lg:text-[14px] xl:text-[18px] flex border-t-[1px] border-b-[1px] gap-3 items-centern p-4 '><IoIosMail className="text-[23px]"/>Pestkit@fote.com</p>

        </div>
        </div>
    </div>

    </div>
    </div>
    <div>
        <div className="bg-black flex flex-col items-center justify-center p-4 gap-3 lg:flex-row lg:gap-48 xl:gap-80" >
            <div className="flex items-center font-bold xl:mr-20 "><h1 className="text-[35px] xl:text-[49px] text-[#FDF001] font-bold ">Pest<span className="text-white">Kit</span></h1>< FaSpider className="text-[37px] xl:text-[43px] hover:rotate-180 transition-all duration-700 text-[#FDF001] ml-[7px]"/></div>
            <div className="flex gap-5">
            <div className="text-[#FDF001] relative text-[33px] xl:text-[34px] hover:mt-2 transition-all duration-700"><BsFillCircleFill className="relative"/><FaXTwitter className=" absolute text-[21px] xl:text-[23px] text-black inset-y-1 ml-[7px] mt-[1px] xl:mt-[2px]"/></div>
            <div className="text-[#FDF001] relative text-[33px] xl:text-[35px] hover:mt-2 transition-all duration-700"><BsFillCircleFill className="relative"/><ImFacebook className=" absolute text-[21px] xl:text-[23px] text-black inset-y-1 ml-[7px] mt-[1px] xl:mt-[2px]"/></div>
            <div className="text-[#FDF001] relative text-[33px] xl:text-[35px] hover:mt-2 transition-all duration-700"><BsFillCircleFill className="relative"/><FaInstagram className=" absolute text-[21px] xl:text-[23px] text-black inset-y-1 ml-[7px] mt-[1px] xl:mt-[2px]"/></div>
            <div className="text-[#FDF001] relative text-[33px] xl:text-[35px] hover:mt-2 transition-all duration-700"><BsFillCircleFill className="relative"/><FaLinkedinIn className=" absolute text-[21px] xl:text-[23px] text-black inset-y-1 ml-[7px] mt-[1px] xl:mt-[2px]"/></div>
            
            </div>
            <div className="text-white xl:text-[20px] xl:mr-10"><h1>Designed by <span className="text-[#FDF001] border-b-2 ">Naveen Raj</span></h1></div>
        </div>
        
        
    </div>
    </div>
  )
}
