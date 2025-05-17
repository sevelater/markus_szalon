"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { links, getLinkHref } from "../consts";

import { SmoothScrollLink } from '../SmoothScrollLink'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 100) {
      setHidden(true);
      setIsOpen(false);
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

  const hamburgerVariants = {
    visible: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    hidden: { y: "-100%", transition: { duration: 0.2, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "-100%" },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="fixed left-0 w-full z-50 justify-items-center"
      >
        {/* Desktop navbar */}
        <div className="hidden custom:flex justify-center items-center px-6 xl:px-12 py-4 w-full rounded-md backdrop-blur-md">
          <ul className="flex gap-4 xl:gap-6 items-center">
            <li className="group">
              <motion.img
                src="/logo.png"
                alt="logó"
                className="h-16 w-16 object-contain shadow-md rounded-full border-2 border-[#c5b87f] mr-12"
              />
            </li>
            {links.map((link) => (
              <li key={link.href} className="relative group tracking-wider font-medium">
                {link.external ? (
                  <motion.button
                    className="text-white text-lg px-4 py-2 relative z-10 hover:text-opacity-70 transition-all duration-200 ease-in-out"
                    onClick={() => window.open(link.href, "_blank")}
                  >
                    {link.text}
                  </motion.button>
                ) : (
                  <SmoothScrollLink
                    href={getLinkHref(link, pathname)}
                    className="text-white text-lg px-4 py-2 relative z-10 hover:text-opacity-70 transition-all duration-200 ease-in-out"
                  >
                    {link.text}
                  </SmoothScrollLink>
                )}
              </li>
            ))}
          </ul>
          <button
            className="text-lg p-4 px-12 border border-[#b49f5b] hover:bg-[#8d7341] hover:bg-opacity-60 rounded-2xl ml-10 transition-all duration-200 ease-in-out font-normal"
            onClick={() =>
              window.open(
                "https://markusszalon.salonic.hu/showServices/?employeeId=23182&placeId=10566&serviceId=0"
              )
            }
          >
            Foglalás
          </button>
        </div>

        {/* Hamburger menu */}
        <motion.div
          variants={hamburgerVariants}
          initial="visible"
          animate={hidden ? "hidden" : "visible"}
          className="custom:hidden fixed top-6 right-3 z-50 p-2"
        >
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
        </motion.div>

        {/* Mobile menu */}
        {isOpen && !hidden && (
          <div className="custom:hidden fixed inset-0 bg-transparent z-40">
            <div
              ref={menuRef}
              className="fixed top-0 right-0 h-full w-64 bg-[#a08e5f] bg-opacity-30 backdrop-blur-md border-l shadow-lg flex items-center justify-center transition-all duration-300"
            >
              <ul className="grid text-white text-md w-full text-center gap-y-8 pt-10 justify-items-center tracking-wider font-medium font-main">
                {links.map((link) =>
                  link.external ? (
                    <li key={link.href}>
                      <button
                        className="block p-2 hover:text-[#c5b87f] transition-colors w-auto"
                        onClick={() => {
                          window.open(link.href, "_blank");
                          setIsOpen(false);
                        }}
                      >
                        {link.text}
                      </button>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <SmoothScrollLink
                        href={getLinkHref(link, pathname)}
                        className="block p-2 hover:text-[#c5b87f] transition-colors w-auto"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.text}
                      </SmoothScrollLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Navbar;