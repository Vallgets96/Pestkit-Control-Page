import { AiOutlineCaretDown } from "react-icons/ai";
import projimg from "./Projectimg";
import AOS from 'aos';


AOS.init();
function Projects() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-32" data-aos="fade-up"  data-aos-duration="1500">
        <h2 className="border-[#FDF001] border-[3px] w-[160px] rounded-2xl  flex justify-center text-[20px] font-semibold " id="Projects">
          Our Projects
        </h2>
        <h1 className="text-[32px] font-extrabold pt-3 p-8 lg:text-[42px] md:text-[39px] xl:text-[45px]">
          Our recently completed projects
        </h1>
      </div>

      <div className="md:grid md:grid-cols-2 lg:p-6 lg:pt-3 xl:grid-cols-3 xl:px-20">
        {projimg.map(function (val) {
          return (
            <div className=" group relative flex w-full h-[370px] lg:h-[440px] xl:h-[405px]  flex-col justify-center items-center rounded-lg p-8 lg:p-7" data-aos="fade-up"  data-aos-duration="1500" >
              <div className="bg-black w-full h-full  rounded-t-xl"></div>
              <div className="bg-[#FDF001] w-full h-full rounded-b-xl"></div>
              <AiOutlineCaretDown className="w-full h-full absolute inset-0" />
              <div>
                <img
                  className="  absolute inset-0 p-16 lg:p-[60px] h-full w-full top-1 rounded-md "
                  src={val.image}
                  alt="img" 
                ></img>
              </div>
              <div className="duration-500 transition-all scale-10  absolute inset-y hover:scale-95 ">
                <div >
                  <div className="bg-[#FDF001] -rotate-180  scale-2 group-hover:scale-85 group-hover:rotate-0  rounded-lg text-center text-[21px] font-semibold p-6 bg-opacity-90 duration-300 delay-100  lg:text-[23px] ">
                    <h1 >{val.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
