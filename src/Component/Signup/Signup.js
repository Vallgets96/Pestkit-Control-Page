import Aos from 'aos';
import action from '../../img/ac2.png'
import bgimg from '../../img/carousel-1.jpg'
import 'aos/dist/aos.css'; 

Aos.init();
export default function Signup() {
    return (
        <div className='relative mt-36'>
            <div className='relative h-[600px] w-full bg-cover bg-center bg-no-repeat overflow-hidden md:h-[750px] bg-fixed lg:h-[550px] xl:h-[630px]  ' style={{ backgroundImage: `url(${bgimg})` }}>
                <div className='bg-black w-full h-full bg-opacity-70 absolute '></div>
                    <div className='flex justify-center '>
                        <img className='absolute  inset-0  rounded-full p-[90px] md:p-[115px] md:ml-[140px] md:mb-48 md:w-[550px] md:h-[550px] lg:p-0 lg:mr-4 lg:h-[340px] lg:w-[340px] lg:mt-[130px] xl:w-[470px] xl:h-[470px] xl:mt-[95px] ' data-aos="fade-left" data-aos-duration="2000"  src={action} alt='action'></img>
                        <div  className='absolute mt-[340px] md:mt-[400px] lg:mt-[15px] p-10 lg:pl-[500px] xl:mt-[50px] xl:ml-[50px] ' data-aos="fade-left" data-aos-duration="2000" >
                         <h1   className=' text-white text-[26px] pr-10 pb-5 font-semibold  md:px-9 md:text-[34px] md:mt-[70px] lg:p-9 lg:text-[36px] xl:px-[70px] xl:ml-[80px] xl:text-[41px] '>Sign Up To Our Newsletter To Get The Latest Offers</h1>
                         <div className='flex md:px-[20px] md:text-[18px] lg:px-8 xl:px-36'><div className='bg-white  w-full h-12 md:h-[58px] xl:h-[65px] rounded-s-full'><input type="text" placeholder='Enter your mail' required='please enter a valid mail' className='w-full h-12 rounded-l-3xl xl:rounded-l-full ml-8 outline-none xl:text-[22px] md:h-14 lg:h-[57px] xl:h-16 xl:mt-[2px] '></input></div><button className="bg-[#FDF001] w-[200px] md:w-[350px] xl:w-[320px] rounded-r-3xl xl:rounded-r-full text-[13px] xl:text-[18px] h-[48px] md:h-[58px] xl:h-[66px] hover:font-semibold">SUBSCRIBE</button></div>
                      </div>
                    </div>
                   
                    
                    
                    
                </div>
            </div>
     
    );
}
