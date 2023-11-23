import { FaSpider } from "react-icons/fa";
import { FaMosquito } from "react-icons/fa6";
import { IoBug } from "react-icons/io5";
import { HiMiniBugAnt } from "react-icons/hi2";
import { BsFillCircleFill } from "react-icons/bs";
export default function Services1() {
  return (
    <div className="p-8 mt-36 flex flex-col justify-center items-center text-center gap-14">
      <div className="flex flex-col justify-center items-center">
        <h2 className="border-[#FDF001] border-[2px] w-[160px] rounded-2xl  flex justify-center text-[20px] font-semibold" id="Services">
          Our Services
        </h2>
        <h1 className="text-[32px] md:text-[38px] lg:text-[45px] font-extrabold  pt-3 p-8">
          Common Pest Control Services
        </h1>
      </div>
      <div className="flex flex-col gap-14 items-center md:grid md:grid-cols-2 md:p-2 lg:px-5 xl:gap-7 xl:px-4  xl:flex xl:flex-row">
        <div className="lg:px-4 xl:px-0" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
          <div className="flex group flex-col justify-center relative text-center items-center hover:mt-[6px] transition-all duration-700 hover:shadow-[0px_12px_20px_9px_#b1b1b0] bg-[#f2f5f5] h-[400px] lg:h-[470px] p-10 lg:p-12 xl:px-[70px] gap-4 lg:gap-5 xl:p-16  rounded-xl shadow-xl">
            <div className="relative">
              <BsFillCircleFill className="relative text-[#FDF001]  text-[130px]" />
              <FaSpider className="absolute  text-[65px]  bottom-[31px] left-[33px]" />
              <div className="absolute inset-0 scale-95 group-hover:scale-0 group-hover:rotate-180  transition-all duration-500 ">
                <BsFillCircleFill className="relative  bottom-[4px]   right-[4px] text-[138px]" />
                <FaSpider className="absolute text-[#FDF001] text-[65px]  bottom-[31px] left-[33px]" />
              </div>
            </div>

            <h3 className="text-[25px] font-semibold">Spiders</h3>

            <p className="text-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisc.
            </p>
            <div className="relative flex justify-center  items-center">
              <button class="group relative h-14 w-48 overflow-hidden  bg-[#FDF001] text-lg shadow-xl rounded-full">
                <div class="absolute rounded-bl-full rounded-br-full inset-0 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-[#FDF001] group-hover:font-medium font-semibold">LEARN MORE</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:px-4 xl:px-0"data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
          <div className="flex flex-col justify-center text-center items-center group bg-[#f2f5f5] hover:mt-[6px] transition-all duration-700 hover:shadow-[0px_12px_20px_9px_#b1b1b0] lg:p-12 h-[400px] lg:h-[470px]  p-10 gap-4 lg:gap-5 xl:px-[65px] x;:px  rounded-xl shadow-xl">
            <div className="relative">
              <BsFillCircleFill className="relative text-[130px] text-[#FDF001]" />
              <FaMosquito className="absolute text-black text-[65px] bottom-[31px] left-[33px]" />
              <div className="absolute inset-0 scale-95 group-hover:scale-0 group-hover:rotate-180  transition-all duration-500 ">
                <BsFillCircleFill className="relative  bottom-[4px] right-[4px] text-[138px]" />
                <FaMosquito className="absolute text-[#FDF001] text-[65px] bottom-[31px] left-[33px]" />
              </div>
            </div>
            <h3 className="text-[25px] font-semibold">Spiders</h3>
            <p className="text-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisc .
            </p>
            <div className="relative flex justify-center  items-center">
              <button class="group relative h-14 w-48 overflow-hidden  bg-[#FDF001] text-lg shadow-xl rounded-full">
                <div class="absolute rounded-bl-full rounded-br-full inset-0 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-[#FDF001] group-hover:font-medium font-semibold">LEARN MORE</span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:px-4 xl:px-0" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
          <div className="flex flex-col justify-center group text-center items-center bg-[#f2f5f5] hover:mt-[6px] transition-all duration-700 hover:shadow-[0px_12px_20px_9px_#b1b1b0] lg:p-12 h-[400px] lg:h-[470px]  p-10 gap-4  lg:gap-5 xl:px-[65px]  rounded-xl shadow-xl">
            <div className="relative">
              <BsFillCircleFill className="relative text-[#FDF001] text-[130px]" />
              <HiMiniBugAnt className="absolute text-black text-[65px] bottom-[31px] left-[33px]" />
              <div className="absolute inset-0 scale-95 group-hover:scale-0 group-hover:rotate-180  transition-all duration-500 ">
                <BsFillCircleFill className="relative  bottom-[4px] right-[4px] text-[138px]" />
                <HiMiniBugAnt className="absolute text-[#FDF001] text-[65px] bottom-[31px] left-[33px]" />
              </div>
            </div>
            <h3 className="text-[25px] font-semibold">Spiders</h3>
            <p className="text-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisc .
            </p>
            <div className="relative flex justify-center  items-center">
              <button class="group relative h-14 w-48 overflow-hidden  bg-[#FDF001] text-lg shadow-xl rounded-full">
                <div class="absolute rounded-bl-full rounded-br-full inset-0 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-[#FDF001] group-hover:font-medium font-semibold">LEARN MORE</span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:px-4 xl:px-0" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
          <div className="flex flex-col justify-center group text-center items-center bg-[#f2f5f5] hover:mt-[6px] transition-all duration-700 hover:shadow-[0px_12px_20px_9px_#b1b1b0] lg:p-12 h-[400px] lg:h-[470px]  p-10 gap-4 lg:gap-5 xl:px-[65px]  rounded-xl shadow-xl">
            <div className="relative">
              <BsFillCircleFill className="relative text-[#FDF001] text-[130px]" />
              <IoBug className="absolute text-black text-[65px] bottom-[31px] left-[33px]" />
              <div className="absolute inset-0 scale-95 group-hover:scale-0 group-hover:rotate-180  transition-all duration-500 ">
                <BsFillCircleFill className="relative  bottom-[4px] right-[4px] text-[138px]" />
                <IoBug className="absolute text-[#FDF001] text-[65px] bottom-[31px] left-[33px]" />
              </div>
            </div>
            <h3 className="text-[25px] font-semibold">Spiders</h3>
            <p className="text-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisc .
            </p>
            <div className="relative flex justify-center  items-center">
              <button class="group relative h-14 w-48 overflow-hidden  bg-[#FDF001] text-lg shadow-xl rounded-full">
                <div class="absolute rounded-bl-full rounded-br-full inset-0 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-[#FDF001] group-hover:font-medium font-semibold">LEARN MORE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center  items-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
              <button class="group relative h-14 w-48 overflow-hidden  bg-[#FDF001] text-lg shadow-xl rounded-full">
                <div class="absolute rounded-full inset-0 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-[#FDF001] font-semibold group-hover:font-medium">MORE SERVICES</span>
              </button>
      </div>
    </div>
  );
}
