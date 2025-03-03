"use client";

import Menu from './components/navbar/page';
import Service from './components/service/page';
import Portfolio from './components/portfolio/page';
import Footer from './components/connect-us/page';
import Scheduel from './components/schedule/page';





const Page = () => {
  return (
    <div className="font-mono text-gray-100 overflow-hidden">

        <Menu/>

      <div className="bg-[url('../public/main.jpg')] bg-cover bg-center h-32 flex justify-center items-center py-64">
        <button
          className="p-4 px-12 bg-slate-400 rounded-2xl hover:bg-slate-500"
          onClick={() => window.open("https://markusszalon.salonic.hu")}>
          Foglalás
        </button>
      </div>

      <div className="py-0.5 bg-slate-900" id="line"></div>

      <Service/>

      <div className="py-0.5 bg-slate-900" id="line"></div>

      <Portfolio/>

      <div className="py-0.5 bg-slate-900"></div>

      <Scheduel/>

      <div className="py-0.5 bg-slate-900"></div>

      <Footer/>  

    </div>
  );
};

export default Page;
