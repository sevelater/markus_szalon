"use client";

import Menu from './components/navbar/page';
import Service from './components/service/page';
import Portfolio from './components/portfolio/page';
import Footer from './components/connect-us/page';
import Scheduel from './components/schedule/page';



const Page = () => {
  return (
    <div className="bg-main font-mono text-gray-100 overflow-hidden bg-[#c9ba7b] bg-opacity-70 to-[#8d7341] bg-gradient-to-t">
    
        <Menu/>

      <div className="bg-[url('../public/main.jpg')] bg-cover bg-center h-44 flex justify-center items-center py-64 sm:h-20">
        <button
          className="p-4 px-12 bg-[#b49f5b] hover:bg-[#8d7341] hover:bg-opacity-60 rounded-2xl "
          onClick={() => window.open("https://markusszalon.salonic.hu/showServices/?employeeId=23182&placeId=10566&serviceId=0")}>
          Foglalás
        </button>
      </div>

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      <div className="z-10">
      <Service/>
      </div>

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      <Portfolio/>

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      <div className="z-10">
      <Scheduel/>
      </div>

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      <Footer/>  

    </div>
  );
};

export default Page;
