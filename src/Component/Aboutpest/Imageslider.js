import { AiOutlineCaretDown } from "react-icons/ai"; 
import { FaCity,FaSchool,FaHospital,FaWarehouse } from "react-icons/fa";
import img1 from "../../img/about-img.jpg"
import AOS from 'aos';
 
AOS.init();

export default function Imgslid (){
    return(
        <div className="">
        <div className="relative mt-36 px-8 lg:pr-[100px] lg:grid lg:grid-cols-2 xl:px-20 ">
        
        <div className="md:px-20 lg:pr-16 lg:px-0 xl:pr-8" data-aos="fade-up" data-aos-duration="800" >
        <div className=" relative flex w-full h-[370px] md:h-[500px] lg:h-[630px] lg:w-[470px] xl:w-full flex-col justify-center items-center rounded-lg overflow-hidden">
        <div className="bg-black w-full h-full  rounded-t-xl"></div>
        <div className="bg-[#FDF001] w-full h-full rounded-b-xl"></div>
        <AiOutlineCaretDown className="w-full h-full absolute inset-0"/>
        <div ><img  className=" absolute inset-0 p-10 lg:p-14 xl:p-12 h-full w-full  top-1 rounded-md "  src={img1} alt="img"></img></div>
        <div className="absolute top-0 right-0 bg-white w-[130px] h-[150px]  lg:h-[190px] lg:w-[170px] text-center  animate-float rounded-lg  p-5"><span className="font-extrabold text-[35px] lg:text-[50px]">20</span><h1 className="font-semibold text-[15px] lg:text-[16px]">Years Of Experience</h1></div>
        
        </div>
        </div>

        <div className="mt-14 lg:mt-0 flex flex-col gap-5 md:p-10 lg:p-0 lg:pl-16 xl:pl-7" data-aos="fade-up" data-aos-duration="1200" id="About">
            <div>
            <h2 className="border-[#FDF001] border-[2px] w-[160px] rounded-2xl  flex justify-center text-[20px] font-semibold">About PestKit</h2>
            <h1 className="text-[32px] md:text-[38px] lg:text-[43px] xl:text-[48px] font-bold mt-5">World Best Pest Control Services Since 2008</h1></div>
            <p className="text-[19px]">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <div className="flex  gap-4 md:gap-9 justify-center mt-4 lg:ml-14 xl:-ml-5 xl:gap-5 ">
            <div className="flex flex-col justify-center items-center"><FaCity className="bg-black  rounded-xl text-[#FDF001] text-[70px] md:text-[90px]  lg:text-[80px] xl:text-[98px] p-3"/><h3 className="text-center leading-5 font-semibold mt-2 md:text-[18px] xl:text-[20px]">Building Cleaning</h3></div>
            <div className="flex flex-col justify-center items-center"><FaSchool className="bg-black rounded-xl  text-[#FDF001] text-[70px] md:text-[90px] lg:text-[80px]  xl:text-[98px] p-3 "/>  <h3 className=" text-center leading-5 mt-2  font-semibold md:text-[18px] xl:text-[20px]">Exducation Center</h3></div>
            <div className="flex flex-col justify-center items-center"><FaHospital className="bg-black rounded-xl  text-[#FDF001] text-[70px] md:text-[90px] lg:text-[80px]  xl:text-[98px] p-3 "/><h3 className=" text-center leading-5 mt-2  font-semibold md:text-[18px] xl:text-[20px]">Warehouse Cleaning</h3></div>
            <div className="flex flex-col justify-center items-center"><FaWarehouse className="bg-black rounded-xl  text-[#FDF001] text-[70px] md:text-[90px] lg:text-[80px]  xl:text-[98px] p-3"/><h3 className=" text-center leading-5 mt-2  font-semibold md:text-[18px] xl:text-[20px]">Hospital Cleaning</h3></div>
            </div>
            <div><button className="bg-[#FDF001] p-[16px] overflow-hidden group relative rounded-3xl w-[180px] shadow-lg font-semibold mt-5 xl:w-[220px] xl:text-[20px] xl:p-[20px] xl:mt-[35px]">
            <div class="absolute rounded-2xl inset-0 w-0 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>

            <span className="group-hover:text-[#FDF001] relative">READ MORE</span></button></div>
        </div>
        </div>





    </div>
)}

