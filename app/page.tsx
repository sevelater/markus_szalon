"use client";

import Menu from './components/navbar/page';
import Service from './components/service/page';
import Portfolio from './components/portfolio/page';
import Scheduel from './components/schedule/page';

const Page = () => {
  return (
    <div className="bg-main font-mono text-gray-100 overflow-hidden bg-[#c9ba7b] bg-opacity-70 to-[#8d7341] bg-gradient-to-t">
      <Menu />

      <div className="bg-[url('../public/main.jpg')] bg-cover bg-center justify-center items-center py-44 flex flex-col lg:box custom:h-2/4">

        <div className="text-center p-5 mb-10 m-10 md:flex md:flex-col hidden lg:max-w-4xl custom:text-lg border-opacity-10 border-spacing-2  md:my-16 justify-center items-center">

          <div className="bg-amber-200 bg-opacity-20 absolute py-16 px-56 text-3xl filter blur-3xl"></div>

          {/* <div className="backdrop-blur-sm" id="körök">
          <div id="első" className="w-72 h-72 rounded-full absolute bg-[#c5c2b6] bg-opacity-20 md:flex mix-blend-multiply filter blur-xl -top-7"></div>
          <div id="második" className="w-72 h-72 rounded-full absolute bg-[#c7c2af] bg-opacity-20 md:flex mix-blend-multiply filter blur-xl -top-20 right-1/3"></div>
          <div id="harmadik" className="w-72 h-72 rounded-full absolute bg-[#a09f9f] bg-opacity-20 md:flex mix-blend-multiply filter blur-xl right-0 -top-10"></div>
          
          </div> */}
          <p
            className="text-white text-md custom:max-w-2xl italic max-w-md mb-7"

          >
            „A szakmám nem csak a munkám, hanem egy olyan hivatás, ahol a minőségi márkák és szakmai tudás varázsolja meg a te egyéniséged.”
          </p>
          <p
            className="text-white text-xs sm:text-sm lg:text-base mt-2"

          >
            Pintyi Gabriella
          </p>
        </div>

        {/* Foglalás gomb csak custom alatt */}
        
        <button
          className="p-4 px-12 bg-[#8d7341] bg-opacity-60  backdrop-blur-[2px] custom:hidden text-lg border border-[#b49f5b] hover:bg-[#8d7341] hover:bg-opacity-60 rounded-2xl transition-all duration-200 ease-in-out"
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