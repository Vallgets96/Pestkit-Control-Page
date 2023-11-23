
import { FaCheck, FaTimes } from "react-icons/fa";
import AOS from 'aos';
 
AOS.init();
export default function Pricing() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-32"  data-aos="fade-up"  data-aos-duration="2500" >
        <h2 className="border-[#FDF001] border-[3px] w-[160px] rounded-2xl flex justify-center text-[20px] font-semibold" id="Pricing Plan">
          Our Pricing
        </h2>
        <h1 className="text-[30px] xl:text-[45px] lg:text-[40px] md:text-[39px] font-extrabold pt-3 lg:px-40 p-10">
          Affordable Pricing Plan For Pest Control Services
        </h1>
      </div>
      <div className="p-10  flex flex-col gap-8 transition-all duration-75 delay-500 md:grid md:grid-cols-2 lg:grid-cols-3 xl:px-14">
        <div data-aos="fade-right" data-aos-duration="2500">
        <div className="w-full relative bg-[#F5F6F6] group shadow-xl  hover:shadow-[0px_12px_20px_9px_#b1b1b0] transition-all duration-1000 hover:mt-[6px] rounded-b-2xl pb-10"   >
          <div className="bg-[#FDF001] z-20 relative flex flex-col justify-center text-center items-center rounded-t-2xl rounded-b-full">
            <h1 className="text-[25px] rounded-t-2xl xl:text-[32px] font-semibold p-3">
              Basic
            </h1>
            <hr className="border-solid border-t-[1px] w-full border-black"></hr>

            <div className=" p-10 pb-16 xl:pb-[85px] rounded-b-xl ">
              <h1 className="text-[28px] lg:text-[32px] xl:text-[38px] font-semibold">
                $60<span className="text-[18px] text-[#555555]">/mon</span>
              </h1>
              <h2 className="text-[18px] text-[#555555]">Basic Pest control</h2>
            </div>
          </div>
          <div className=" extend absolute z-10 inset-0  left-[1px] bottom-[300px] pb-[254px] lg:pb-[260px] xl:pb-[302px] rounded-b-[250px]  transition-all opacity-0 text-center group-hover:opacity-75 duration-2000 bg-[#7E7800]  w-[343px] md:w-[326px] lg:w-[290px] xl:w-[419px] 2xl:w-[444px] h-2  "></div>
          <div className="list text-[20px] text-[#555555] flex flex-col justify-center items-center xl:text-[25px]  p-10 gap-5 ">
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p>Household pests </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p className="flex items-center">Rodent Control</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p className="flex items-center">Re-Service </p>
            </div>
            <div className="flex items-center gap-2">
              <FaTimes className="text-[20px] text-red-600" />
              <p className="flex items-center">Termite Control</p>
            </div>
            <div className="flex items-center gap-2">
              <FaTimes className="text-[20px] text-red-600" />
              <p className="flex items-center">Mosquito Reduction</p>
            </div>
          </div>
          <div className="relative flex justify-center  items-center">
            <button class="group relative h-14 w-48 overflow-hidden  bg-[#FDF001] text-lg shadow-xl rounded-full">
              <div class="absolute rounded-full inset-0 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-[#FDF001] font-semibold group-hover:font-medium">
                GET STARTED
              </span>
            </button>
          </div>
        </div>
        </div>
        
        <div data-aos="fade-up"  data-aos-duration="2500">
        <div className="w-full relative bg-[#F5F6F6] shadow-xl hover:shadow-[0px_12px_20px_9px_#b1b1b0] group hover:mt-[6px] transition-all duration-1000 rounded-b-xl pb-10"  >
          <div className="bg-black z-20 relative flex flex-col justify-center text-center items-center rounded-b-full rounded-t-xl">
            <h1 className="text-[25px] xl:text-[32px] font-semibold text-[#FDF001] p-3">
              Standard
            </h1>
            <hr className="border-solid border-t-[1px] w-full border-[#FDF001]"></hr>

            <div className="  p-10 pb-16 xl:pb-[85px] rounded-bl-lg rounded-br-lg">
              <h1 className="text-[28px] lg:text-[32px] xl:text-[38px] text-[#FDF001] font-semibold">
                $80<span className="text-[18px] text-[#FDF001]">/mon</span>
              </h1>
              <h2 className="text-[18px] text-white">Standard Pest control</h2>
            </div>
          </div>
          <div className=" extend absolute z-10 inset-0  left-[1px] bottom-[300px] pb-[254px] lg:pb-[260px] xl:pb-[302px] rounded-b-[250px]  transition-all opacity-0 text-center group-hover:opacity-75 duration-1000 bg-gray-600  w-[343px] md:w-[326px] lg:w-[290px] xl:w-[419px] 2xl:w-[444px] h-2  "></div>

          <div className="list text-[20px] text-[#555555] flex flex-col justify-center items-center xl:text-[25px]  p-10 gap-5 ">
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p>Household pests </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p className="flex items-center">Rodent Control</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p className="flex items-center">Re-Service </p>
            </div>
            <div className="flex items-center gap-2">
              <FaTimes className="text-[20px] text-red-600" />
              <p className="flex items-center">Termite Control</p>
            </div>
            <div className="flex items-center gap-2">
              <FaTimes className="text-[20px] text-red-600" />
              <p className="flex items-center">Mosquito Reduction</p>
            </div>
          </div>
          <div className="relative flex justify-center  items-center">
              <button class="group relative h-14 w-48 overflow-hidden  bg-black text-lg shadow-xl rounded-full">
                <div class="absolute rounded-full inset-0 w-0 bg-[#FDF001] transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span class="relative text-[#FDF001] group-hover:text-black  group-hover:font-medium">LEARN MORE</span>
              </button>
        </div>
        </div>
        </div>

        <div  data-aos="fade-left"  data-aos-duration="2500" >
        <div className="w-full relative bg-[#F5F6F6] shadow-xl hover:shadow-[0px_12px_20px_9px_#b1b1b0] group group-hover:mt-[6px] transition-all duration-1000 rounded-b-xl pb-10" >
          <div className="bg-[#FDF001] z-20 relative flex flex-col justify-center text-center items-center rounded-b-full rounded-t-xl">
            <h1 className="text-[25px] xl:text-[32px] font-semibold p-3">
              Premium
            </h1>
            <hr className="border-solid border-t-[1px] w-full border-black"></hr>

            <div className=" pb-16 xl:pb-[85px] p-10 rounded-bl-lg rounded-br-lg">
              <h1 className="text-[28px] lg:text-[32px] xl:text-[38px] font-semibold">
                $120<span className="text-[18px] text-[#555555]">/mon</span>
              </h1>
              <h2 className="text-[18px]  text-[#555555]">
                Premium Pest control
              </h2>
            </div>
          </div>
          <div className=" extend absolute z-10 inset-0  left-[1px] bottom-[300px] pb-[254px] lg:pb-[260px] xl:pb-[302px] rounded-b-[250px]  transition-all opacity-0 text-center group-hover:opacity-75 duration-1000 bg-[#7E7800] w-[343px] md:w-[326px] lg:w-[290px] xl:w-[419px] 2xl:w-[444px] h-2  "></div>

          <div className="list text-[20px] text-[#555555] flex flex-col justify-center items-center xl:text-[25px]  p-10 gap-5 ">
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p>Household pests </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p className="flex items-center">Rodent Control</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[20px] text-green-600" />
              <p className="flex items-center">Re-Service </p>
            </div>
            <div className="flex items-center gap-2">
              <FaTimes className="text-[20px] text-red-600" />
              <p className="flex items-center">Termite Control</p>
            </div>
            <div className="flex items-center gap-2">
              <FaTimes className="text-[20px] text-red-600" />
              <p className="flex items-center">Mosquito Reduction</p>
            </div>
          </div>
          <div className="relative flex justify-center  items-center">
            <button class="group relative h-14 w-48 overflow-hidden  bg-[#FDF001] text-lg shadow-xl rounded-full">
              <div class="absolute rounded-full inset-0 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-[#FDF001] font-semibold group-hover:font-medium">
                GET STARTED
              </span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
