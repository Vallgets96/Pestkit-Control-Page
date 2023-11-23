import AOS from 'aos';


AOS.init();

export default function Service() {
    return (
        <div className="md:p-2 xl:px-8">
            <div className="bg-[#f2f5f5] rounded-lg mt-40 m-5 shadow-lg pt-10 pb-10" data-aos="fade-up" data-aos-duration="1500">

                <div className="text-black text-[33px] md:text-[38px] md:mb-4 font-semibold text-center">
                    <h1>Find Your Pest Control Services</h1>
                </div>

                <div className="flex flex-col gap-6 p-6 md:grid md:grid-cols-2  xl:grid-cols-6 xl:items-center xl:justify-center xl:ml-8 xl:gap-32  justify-center text-center items-center">

                    <select className="p-5 rounded-xl shadow-md w-full xl:h-[70px] xl:w-[200px] lg:text-[20px]">
                        <option>Types Of Service</option>
                        <option>Pest Control-1</option>
                        <option>Pest Control-2</option>
                        <option>Pest Control-3</option>
                        <option>Pest Control-4</option>
                    </select>

                    <input type="text" placeholder="Name" required className="p-4 w-full xl:h-[70px] xl:w-[200px] rounded-xl shadow-lg lg:text-[21px]"></input>
                    <input type="text" placeholder="Phone" required className="p-4 w-full xl:h-[70px] xl:w-[200px]  rounded-xl shadow-lg lg:text-[21px]"></input>
                    <input type="text" placeholder="Email" required className="p-4 w-full xl:h-[70px] xl:w-[200px]  rounded-xl shadow-lg lg:text-[21px]"></input>

                    <div className=" xl:mb-2 ">
                        <button className="bg-[#FDF227] p-5  w-[340px] md:w-[668px] lg:w-[910px] xl:w-[300px]  rounded-xl shadow-lg font-semibold mt-3 lg:text-[18px]">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
