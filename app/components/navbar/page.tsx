"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
      setHidden(true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setHidden(false);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex w-full fixed justify-between">
      <motion.div 
        variants= {{
          visible: { opacity: 1 },
          hidden: { y: "-100%" },
          
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: "easeOut", duration: 0.2  }}

      className={`fixed top-0 left-0 w-full flex justify-between bg-slate-100 drop-shadow-lg backdrop-blur-md bg-opacity-20 p-5 z-30 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}>

        <a
          

          href="../"
          className="text-2xl font-sans transition-opacity">
          Márkus Szalon
        </a>

      </motion.div>
      <div className="fixed flex z-50 top-8 right-6">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
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
        <div className="fixed inset-0 bg-transparent z-20">
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-64 md:w-72 lg:w-80 bg-slate-900 border-l backdrop-blur-md bg-opacity-30 flex items-center justify-center text-center"
          >
            <ul className="grid text-slate-100 text-xl w-2/4 text-center">
              <a onClick={() => setIsOpen(!isOpen)} className="my-10 hover:text-white hover:bg-opacity-30 w-full p-1 cursor-pointer h-0 text-center" href="../">Főoldal</a>
              <a onClick={() => setIsOpen(!isOpen)} className="my-10 hover:text-white cursor-pointer w-full h-0" href="#service">Szolgáltatások</a>
              <a onClick={() => setIsOpen(!isOpen)} className="my-10 hover:text-white cursor-pointer w-full h-0" href="#portfolio">Portfólióm</a>
              <a 
              onClick={() => {
              window.open("https://www.facebook.com/profile.php?id=61568795877252&sk=photos") 
              setIsOpen(!isOpen)}}

              className="my-10 hover:text-white cursor-pointer w-full h-0" >Referencia</a>
              <a onClick={() => setIsOpen(!isOpen)} className="my-10  mb-48 hover:text-white cursor-pointer w-full h-0" href="#get-in-touch">Elérhetőségek</a>
            </ul>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Menu;
