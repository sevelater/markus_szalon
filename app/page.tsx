"use client";

import Menu from './components/navbar/page';
import Service from './components/service/page';
import Portfolio from './components/portfolio/page';
import Scheduel from './components/schedule/page';

const Page = () => {
  return (
    <div className="bg-main font-mono text-gray-100 overflow-hidden bg-[#c9ba7b] bg-opacity-70 to-[#8d7341] bg-gradient-to-t">
      <Menu />

      <div className="bg-[url('../public/main.jpg')] bg-cover bg-center justify-center items-center flex flex-col lg:box custom:text-center py-56 lg:py-44">
        
        {/* Centered Márkus Szalon paragraph */}
        <p className="text-white custom:max-w-2xl text-[38px] md:text-[65px] font-medium w-full text-center custom:text-[80px] flex justify-center custom:mt-32">
          Márkus Szalon
        </p>

        {/* New paragraph for custom width */}
        <div className="text-center mt-3 mb-10 md:flex md:flex-col hidden lg:max-w-4xl custom:text-lg border-opacity-10 border-spacing-2 justify-center items-center">
        <p className="text-white md:flex custom:max-w-2xl text-md font-light w-full text-center hidden lg:block italic">
          &quot;Minden ollócsattintás egy újabb történet!&quot;
        </p>
        
          <div className="bg-amber-200 bg-opacity-20 absolute py-16 px-56 text-3xl filter blur-3xl"></div>
        </div>

        {/* Foglalás button with adjusted positioning */}
        <button
          className="mt-16 md:mt-4 lg:mt-0 p-4 px-10 md:px-12 bg-[#8d7341] bg-opacity-60 backdrop-blur-[2px] custom:hidden text-lg border border-[#b49f5b] hover:bg-[#8d7341] hover:bg-opacity-60 rounded-2xl transition-all duration-200 ease-in-out"
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