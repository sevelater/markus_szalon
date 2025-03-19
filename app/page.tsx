"use client";

import Navbar from './components/navbar/page';
import Service from './components/service/page';
import Portfolio from './components/portfolio/page';
import Scheduel from './components/schedule/page';

const Page = () => {
  return (
    <div className="bg-main font-main text-gray-100 overflow-hidden bg-[#c9ba7b] bg-opacity-70 to-[#8d7341] bg-gradient-to-t">
      <Navbar />

      <div className="bg-[url('/main.jpg')] bg-cover bg-center flex flex-col justify-center items-center py-56 lg:py-60 text-center">
  
        {/* Centered Márkus Szalon paragraph */}
        <p className="text-white custom:max-w-2xl text-[38px] sm:text-[45px] md:text-[65px] font-medium font-main w-full custom:text-[80px]">
          Márkus Szalon
        </p>

        {/* New paragraph for custom width */}
        <div className="mt-3 flex flex-col justify-center items-center custom:text-lg lg:max-w-4xl text-[14px]">
          <p className="text-white custom:max-w-2xl text-md sm:text-lg custom:text-xl font-medium w-full italic">
            &quot;Minden ollócsattintás egy újabb történet!&quot;
          </p>
          <div className="bg-[#f7f7f7] bg-opacity-20 absolute py-16 px-28 text-3xl filter blur-3xl"></div>
        </div>

        {/* Foglalás button with original positioning */}
        <button
          className="mt-14 md:mt-16 hover:bg-opacity-80 transition-all duration-300 lg:mt-14 sm:px-12 p-4 px-12 py-3 md:px-12 bg-[#8d7341] bg-opacity-60 backdrop-blur-[2px] custom:hidden text-lg border border-[#b49f5b] hover:bg-[#8d7341] rounded-2xl ease-in-out"
          onClick={() => window.open("https://markusszalon.salonic.hu/showServices/?employeeId=23182&placeId=10566&serviceId=0")}
        >
          Foglalás
        </button>
  
      </div>

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      <div className="z-10">
        <Service />
      </div>

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      <Portfolio />

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      <div className="z-10">
        <Scheduel />
      </div>

      <div className="py-0.5 bg-[#302118]" id="line"></div>
    </div>
  );
};

export default Page;
