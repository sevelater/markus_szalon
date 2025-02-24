"use client";

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import profileImg from '../public/profile.png';

import hair2 from '../public/hair2.jpg';
import hair3 from '../public/hair3.jpg';


function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [navbar, setNavbar] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);
 

  // Close menu if clicking outside (but not when clicking the button)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        navbarRef.current && 
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
  
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [isOpen]);
  
  // Handle Navbar Background Change on Scroll (Fix for SSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const changeBackground = () => {
        if (window.scrollY >= 5) {
          setNavbar(false);
        } else {
          setNavbar(true);
        }
      };
  
      window.addEventListener("scroll", changeBackground);
  
      return () => {
        window.removeEventListener("scroll", changeBackground);
      };
    }
  }, []);


  

  return (
    
    <>
      <div
        ref={navbarRef}
        className={navbar ? "flex justify-between bg-slate-400 bg-opacity-85 p-5 w-full z-40 fixed" : "flex justify-between bg-gray-400 bg-opacity-65 p-5 w-full z-40 fixed"}
        
        >
        <button
          className={`text-2xl p-3 z-40 ${isOpen ? "opacity-20" : "opacity-100"}`}>Márkus Szalon</button>

        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)} // Toggles open/close
          className="flex flex-col justify-center items-center scale-125 z-50"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40">
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-80 bg-slate-400 bg-opacity-85 flex items-center justify-center transition-all duration-300"
          >
            <ul className="grid text-zinc-950 text-xl w-2/4">
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#service">Szolgáltatások</a>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#portfolio">Portfólióm</a>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#referenc">Referencia</a>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#get-in-touch">Elérhetőségek</a>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

const Page = () => {
  return (
    <div className="font-mono text-gray-100">
      <Menu/>

      <div className="bg-[url('../public/main.jpg')] bg-cover bg-center flex justify-center items-center py-64">
        <button
          className="p-4 px-12 bg-slate-400 rounded-2xl hover:bg-red-300"
          onClick={() => window.open("https://markusszalon.salonic.hu")}
        >
          Foglalás
        </button>
      </div>

      <div className="py-0.5 bg-slate-900"></div>

      <div className="grid p-6 h-3/4 bg-slate-600" id="services">

      <div className="justify-items-center mt-8 mb-3" id="block">
        <p className="text-center mb-9 p-2  rounded-md text-gray-100 font-semibold tracking-wider text-xl scroll-mt-36" id="service">Szolgáltatások</p>

        <div className="inlineflex w-full text-xl justify-between items-center p-5 bg-slate-500 rounded-md sm:text-2xl" id="service">
          
            <div className="flex items-center justify-between w-full ">
              <p className="">Hosszú Hajvágás</p>
              <p>25.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full mb-5">
              <p>60 perc</p>
            </div>
            <div className="w-full h-0.5 bg-gray-100 bg-opacity-45 mb-5"></div>

            <div className="flex items-center justify-between w-full ">
              <p className="">Közepes Hajvágás</p>
              <p>20.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full mb-5">
              <p>60 perc</p>
            </div>
            <div className="w-full h-0.5 bg-gray-100 bg-opacity-45 mb-5"></div>

            <div className="flex items-center justify-between w-full ">
              <p className="">Hosszú Hajvágás</p>
              <p>25.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full mb-5">
              <p>60 perc</p>
            </div>
            <div className="w-full h-0.5 bg-gray-100 bg-opacity-45 mb-5"></div>

            <div className="flex items-center justify-between w-full ">
              <p className="">Hosszú Hajvágás</p>
              <p>25.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full mb-5">
              <p>60 perc</p>
            </div>
            <div className="w-full h-0.5 bg-gray-100 bg-opacity-45 mb-5"></div>

            <div className="flex items-center justify-between w-full ">
              <p className="">Hosszú Hajvágás</p>
              <p>25.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full" id="last">
              <p>60 perc</p>
            </div>
          

        </div>
  
          
      </div>
      </div>

      <div className="py-0.5 bg-slate-900"></div>

      <div className="grid bg-slate-400 w-full pt-12 p-5 pb-12 sm:grid-cols-2 scroll-mt-28" id="portfolio">
        <Image 
          alt="profile pic"
          src={profileImg}
          className="flex justify-self-center justify-items-center w-2/5 pb-9"
        />

        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam temporibus commodi fugiat voluptatum illum similique. Ea harum et nobis, facilis nam unde enim voluptas, officia facere adipisci incidunt amet.</p>
      </div>
      <div className="py-0.5 bg-slate-900"></div>
      <div className="p-7 bg-slate-500 w-full scroll-mt-24" id="referenc">
        <p className="text-center mb-8 p-2 rounded-md text-gray-100 font-semibold tracking-wider text-xl">Referencia Képek</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">

          <div className="">

          <Image
         alt=""
         src={hair2}
         width={300}
         height={300}
         className="rounded-lg"
         />
          </div>

          <div className="">

          <Image
         alt=""
         src={hair3}
         width={300}
         height={300}
         className="rounded-lg"
         />
          </div>

          <div className="">

          <Image
         alt=""
         src={hair3}
         width={300}
         height={300}
         className="rounded-lg"
         />
          </div>
        </div>
        <button className="justify-self-center text-center p-5 rounded-md px-8 w-auto bg-slate-600 hover:bg-slate-700 mt-12 mb-5 ">Galéria</button>      
      </div>

      <div className="py-0.5 bg-slate-900" id="line"></div>

      <div className="bg-[url('../public/background.png')] bg-cover bg-center bg-opacity-15 h-auto justify-items-center w-full overflow-hidden lg:bg-[url('../public/calendar.jpg')] md:bg-[url('../public/desktop.jpg')]" id="schedule__1">

      <div
        className="w-full justify-items-center bg-black bg-opacity-55">
         
        <div 
        className="flex gap-12 mx-1 py-5 px-9 sm:scale-110 md:scale-120 text-sm" 
        id="schedule"
        >

          <div className="text-gray-200 pt-5 pb-5 text-center">
            <h3 className="text-center">Hétfő</h3>
            <h3 className="text-center">Kedd</h3>
            <h3 className="text-center">Szerda</h3>
            <h3 className="text-center">Csütörtök</h3>
            <h3 className="text-center">Péntek</h3>
            <h3 className="text-center">Szombat</h3>
            <h3 className="text-center">Vasárnap</h3>
          </div>

          <div className="bg-slate-50 h-auto p-px pt-6 pb-6"></div>

          <div className="text-gray-200 pt-5 pb-5 justify-items-center text-center">
            <h4 className="text-center">Zárva</h4>
            <h4 className="text-center">8:00-20:00</h4>
            <h4 className="text-center">8:00-20:00</h4>
            <h4 className="text-center">8:00-20:00</h4>
            <h4 className="text-center">8:00-20:00</h4>
            <h4 className="text-center">7:00-16:00</h4>
            <h4 className="text-center">Zárva</h4>
          </div>
        </div>
      </div>
      </div>

      <div className="py-0.5 bg-slate-900" id="line"></div>

      <div className="grid lg:justify-between h-auto bg-slate-600 sm:grid md:flex lg:flex p-3 md:justify-between" id="get-in-touch">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.047502066955!2d18.929247183500305!3d47.50918967836878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741df0050b826a9%3A0x5f2293613cb47231!2sM%C3%A1rkus%20Szalon!5e0!3m2!1shu!2shu!4v1740394854670!5m2!1shu!2shu"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pb-12 sm:w-full w-full md:w-2/3 lg:w-6/12 md:rounded-lg lg:rounded-lg"
        ></iframe>
          <div className="mt-3 p-8 bg-slate-800">
          <h3>Telefon</h3>
          <p>+36 30 123 4567</p>
          <br></br>
          <h3>Email</h3>
          <p>abcd@gmail.com</p>
          </div>
      </div>

    </div>
  );
};

export default Page;