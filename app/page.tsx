"use client";

import { useState, useEffect, useRef } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu if clicking outside (but not when clicking the button)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
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

  return (
    <>
      <div className="flex justify-between bg-gray-400 p-5 relative z-50">
        <button className="text-2xl p-3">Márkus Szalon</button>

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
            <ul className="text-zinc-950 text-xl w-2/4">
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Főoldal</li>
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Szolgáltatások</li>
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Portfólióm</li>
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Referencia</li>
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Elérhetőségek</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

const Page = () => {
  return (
    <div className="font-mono">
      <Menu />

      <div className="bg-[url('/pictures/main.jpg')] bg-cover bg-center flex justify-center items-center mb-12 py-64">
        <button
          className="p-4 px-12 bg-slate-400 rounded-2xl hover:bg-red-300"
          onClick={() => window.open("https://markusszalon.salonic.hu")}
        >
          Foglalás
        </button>
      </div>


    <div className="m-0 p-0 h-3/4 " id="services">

      <div className="justify-items-center mt-3 mb-3 space-y-5" id="block">
        <p className="mb-12">Szolgáltatások</p>

        <div className="flex justify-between space-x-10" id="service">
          <p>Hosszú Hajvágás</p>
          <p>25.50$</p>
          <p>60 min</p>
        </div>

        <div className="flex justify-evenly space-x-10" id="service">
          <p>Rövid Hajvágás</p>
          <p>19.50$</p>
          <p>30 min</p>
        </div>

        <div className="flex justify-between space-x-10" id="service">
          <p>Hosszú Hajvágás</p>
          <p>25.50$</p>
          <p>60 min</p>
        </div>

        <div className="flex justify-evenly space-x-10" id="service">
          <p>Rövid Hajvágás</p>
          <p>19.50$</p>
          <p>30 min</p>
        </div>

        <div className="flex justify-between space-x-10" id="service">
          <p>Hosszú Hajvágás</p>
          <p>25.50$</p>
          <p>60 min</p>
        </div>

        <div className="flex justify-evenly space-x-10" id="service">
          <p>Rövid Hajvágás</p>
          <p>19.50$</p>
          <p>30 min</p>
        </div>

        <div className="flex justify-between space-x-10" id="service">
          <p>Hosszú Hajvágás</p>
          <p>25.50$</p>
          <p>60 min</p>
        </div>

        <div className="flex justify-evenly space-x-10" id="service">
          <p>Rövid Hajvágás</p>
          <p>19.50$</p>
          <p>30 min</p>
        </div>

        <div className="flex justify-between space-x-10" id="service">
          <p>Hosszú Hajvágás</p>
          <p>25.50$</p>
          <p>60 min</p>
        </div>

        <div className="flex justify-evenly space-x-10" id="service">
          <p>Rövid Hajvágás</p>
          <p>19.50$</p>
          <p>30 min</p>
        </div>
          
      </div>
    </div>
    </div>
  );
};

export default Page;
