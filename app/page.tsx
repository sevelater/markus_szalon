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

        <div className="text-center bg-slate-50 bg-opacity-10 p-5 mb-10 m-10 backdrop-blur-sm md:flex md:flex-col hidden lg:max-w-4xl custom:text-lg border-opacity-10 border-spacing-2 border md:my-16">
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
          className="p-4 px-12 bg-[#b49f5b] hover:bg-[#8d7341] hover:bg-opacity-60 rounded-2xl custom:hidden"
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