import img1 from '../../img/team-1..jpg'
import img2 from '../../img/team-2.jpg'
import img3 from '../../img/team-3.jpg'
import img4 from '../../img/team-4.jpg'
import { FaXTwitter, FaLinkedinIn,FaInstagram } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { BsFillCircleFill } from "react-icons/bs";
import AOS from 'aos';
 
AOS.init();

export default function Team() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-32" id='Team Members' data-aos="fade-up"  data-aos-duration="1200">
        <h2 className="border-[#FDF001] border-[3px] w-[160px] rounded-2xl flex justify-center text-[20px] font-semibold">
          Our Team
        </h2>
        <h1 className="text-[30px] xl:text-[45px] lg:text-[42px] md:text-[39px] font-extrabold pt-3 p-10">
          Our Team Members
        </h1>
      </div>


            <div className='md:grid grid-cols-2 xl:grid-cols-4 lg:px-14'>
            <div className='p-[40px] ' data-aos="fade-up"  data-aos-duration="900" >
            <div className=' group'>
            <div className="flex justify-center relative items-center overflow-hidden ">
              <span className='absolute  right-4 top-10 flex flex-col gap-3 '>
                <span className='relative -right-14 transition-all duration-1000  group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative'/><FaXTwitter className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001]' /></span>
                <span className='relative -right-32 transition-all duration-1000 group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative '/><FaLinkedinIn className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001]' /></span>
                <span className='relative -right-40 transition-all duration-1000 group-hover:right-0'><BsFillCircleFill className=' w-9 h-9 relative'/><FaInstagram className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001] ' /></span>
                <span className='relative -right-52 transition-all duration-1000 group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative'/><ImFacebook className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001] ' /></span>
              </span>
                <img className="rounded-t-xl w-full "
                  src={img1}/>
              </div>
            
              <div className="p-3 relative   text-center bg-[#FDF001]  rounded-b-xl md:col-span-full">
              <div class="absolute inset-0 w-0 bg-black transition-all rounded-b-xl  duration-[700ms] ease-out group-hover:w-full"></div>

                <span className="text-[20px] relative xl:text-[24px] group-hover:text-[#FDF001] font-semibold group-hover:font-medium">Lisa Corner</span>
                <h2 className="text-[16px] relative xl:text-[18px]  text-[#737373]">Ceo</h2>
              </div>
              </div>
            </div>

            <div className='p-[40px] ' data-aos="fade-up"  data-aos-duration="1100" >
            <div className=' group'>
            <div className="flex justify-center relative items-center overflow-hidden">
            <span className='absolute  right-4 top-10 flex flex-col gap-3 '>
                <span className='relative -right-14 transition-all duration-1000  group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative'/><FaXTwitter className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001]' /></span>
                <span className='relative -right-32 transition-all duration-1000 group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative '/><FaLinkedinIn className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001]' /></span>
                <span className='relative -right-40 transition-all duration-1000 group-hover:right-0'><BsFillCircleFill className=' w-9 h-9 relative'/><FaInstagram className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001] ' /></span>
                <span className='relative -right-52 transition-all duration-1000 group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative'/><ImFacebook className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001] ' /></span>
              </span>
                <img className="rounded-t-xl w-full "
                  src={img2}/>
              </div>
              <div className="p-3 relative   text-center bg-[#FDF001]  rounded-b-xl md:col-span-full">
              <div class="absolute inset-0 w-0 bg-black transition-all rounded-b-xl  duration-[700ms] ease-out group-hover:w-full"></div>

                <span className="text-[20px] relative xl:text-[24px] group-hover:text-[#FDF001] font-semibold group-hover:font-medium">David</span>
                <h2 className="text-[16px] relative xl:text-[18px]  text-[#737373]">Head Officer</h2>
              </div>
              </div>
            </div>

            <div className='p-[40px] ' data-aos="fade-up"  data-aos-duration="1250" >
            <div className=' group'>
            <div className="flex justify-center relative items-center overflow-hidden">
            <span className='absolute  right-4 top-10 flex flex-col gap-3 '>
                <span className='relative -right-14 transition-all duration-1000  group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative'/><FaXTwitter className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001]' /></span>
                <span className='relative -right-32 transition-all duration-1000 group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative '/><FaLinkedinIn className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001]' /></span>
                <span className='relative -right-40 transition-all duration-1000 group-hover:right-0'><BsFillCircleFill className=' w-9 h-9 relative'/><FaInstagram className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001] ' /></span>
                <span className='relative -right-52 transition-all duration-1000 group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative'/><ImFacebook className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001] ' /></span>
              </span>
                <img className="rounded-t-xl w-full "
                  src={img3}/>
              </div>
              <div className="p-3 text-center relative bg-[#FDF001]  rounded-b-xl md:col-span-full">
              <div class="absolute inset-0 w-0 bg-black transition-all rounded-b-xl  duration-[700ms] ease-out group-hover:w-full"></div>

                <h1 className="text-[20px] relative group-hover:text-[#FDF001] xl:text-[24px]  font-semibold">Nilofer</h1>
                <h2 className="text-[16px] relative xl:text-[18px] text-[#737373]">General Manager</h2>
              </div>
              </div>
            </div>

            <div className='p-[40px] ' data-aos="fade-up"  data-aos-duration="1400" >
            <div className=' group'>
            <div className="flex justify-center relative  items-center overflow-hidden">
            <span className='absolute  right-4 top-10 flex flex-col gap-3 '>
                <span className='relative -right-14 transition-all duration-1000  group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative'/><FaXTwitter className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001]' /></span>
                <span className='relative -right-32 transition-all duration-1000 group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative '/><FaLinkedinIn className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001]' /></span>
                <span className='relative -right-40 transition-all duration-1000 group-hover:right-0'><BsFillCircleFill className=' w-9 h-9 relative'/><FaInstagram className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001] ' /></span>
                <span className='relative -right-52 transition-all duration-1000 group-hover:right-0' ><BsFillCircleFill className=' w-9 h-9 relative'/><ImFacebook className=' absolute top-2 left-2 w-5 h-5 text-[#FDF001] ' /></span>
              </span>
                <img className="rounded-t-xl w-full "
                  src={img4}/>
              </div>
              <div className="p-3 relative   text-center bg-[#FDF001]  rounded-b-xl md:col-span-full">
              <div class="absolute inset-0 w-0 bg-black transition-all rounded-b-xl  duration-[700ms] ease-out group-hover:w-full"></div>

                <span className="text-[20px] relative xl:text-[24px] group-hover:text-[#FDF001] font-semibold group-hover:font-medium">Brad Dom</span>
                <h2 className="text-[16px] relative xl:text-[18px]  text-[#737373]">Assitant Manager</h2>
              </div>
              </div>
            </div>
            </div>

            </div>
          
        
     
   
  );
}
