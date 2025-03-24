"use client";

import Service from './components/service/page';
import Portfolio from './components/portfolio/page';
import Scheduel from './components/schedule/page';

const Page = () => {
  return (
    <div className="bg-main font-main text-gray-100 overflow-hidden bg-gradient-to-t from-[#8d7341] to-[#c9ba7b] min-h-screen">
      {/* Hero Section with Blurred Background */}
      <div className="relative bg-[url('/main.jpg')] bg-cover bg-center flex flex-col justify-center items-center py-56 lg:py-60 text-center">
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Centered Márkus Szalon paragraph */}
          <p className="text-white max-w-2xl text-[38px] sm:text-[45px] md:text-[65px] lg:text-[80px] font-main lg:font-extrabold font-medium">
            Márkus Szalon
          </p>

          {/* New paragraph for custom width */}
          <div className="mt-3 flex flex-col justify-center items-center text-[14px] lg:max-w-4xl">
            <p className="text-white max-w-2xl text-md sm:text-lg lg:text-xl font-medium italic">
              &quot;Minden ollócsattintás egy újabb történet!&quot;
            </p>
          </div>

          {/* Foglalás button */}
          <button className="mt-14 md:mt-16 hover:bg-opacity-80 transition-all duration-300 lg:mt-14 sm:px-12 p-4 px-12 py-3 md:px-12 bg-[#8d7341] bg-opacity-60 backdrop-blur-[2px] custom:hidden text-lg border border-[#b49f5b] hover:bg-[#8d7341] rounded-2xl ease-in-out" onClick={() => window.open("https://markusszalon.salonic.hu/showServices/?employeeId=23182&placeId=10566&serviceId=0")}
          >
            Foglalás
          </button>
        </div>
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