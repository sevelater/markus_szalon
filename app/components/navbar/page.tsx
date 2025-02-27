"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from 'next/link';

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
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      
      <div className="fixed top-0 left-0 w-full flex justify-between bg-slate-100 drop-shadow-lg bg-opacity-20 p-5 z-30">

        <motion.a
          variants= {{
            visible: { opacity: 1 },
            hidden: { x: "-150%" },
          }}
          animate={hidden ? "hidden" : "visible"}

          href="../"
          className="text-2xl font-sans transition-opacity">
          Márkus Szalon
        </motion.a>

        
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
            className="fixed top-0 right-0 h-full w-72 bg-slate-800 border-l-2 backdrop-blur-md bg-opacity-30 flex items-center justify-center"
          >
            <ul className="grid text-slate-400 text-xl w-2/4 text-center">
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="../">Főoldal</a>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#service">Szolgáltatások</a>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#portfolio">Portfólióm</a>
              <Link href="../components/gallery" onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" >Referencia</Link>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#get-in-touch">Elérhetőségek</a>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
