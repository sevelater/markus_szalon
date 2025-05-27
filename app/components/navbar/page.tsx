"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { links, getLinkHref } from "../consts";

import { SmoothScrollLink } from "../SmoothScrollLink";

// firebase-es frissítés + ikonok importálása

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { db } from "../../firebase"; // útvonalat igazítsd, ha más a szerkezet
import { doc, onSnapshot } from "firebase/firestore";

interface Contact {
  phone: string;
  email: string;
  facebook: string;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  // firebase alapú frissítés

  const [contact, setContact] = useState<Contact>({
    phone: "+36 70 598 5439",
    email: "gabika20040218@gmail.com",
    facebook:
      "https://www.facebook.com/profile.php?id=61568795877252&sk=photos",
  });

  useEffect(() => {
    const docRef = doc(db, "settings", "general");
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.contact) {
            setContact({
              phone: data.contact.phone || contact.phone,
              email: data.contact.email || contact.email,
              facebook: data.contact.facebook || contact.facebook,
            });
          }
        }
      },
      (err) => console.error("Firestore hiba:", err)
    );
    return () => unsubscribe();
  }, []);

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
    hidden: {
      y: "-100%",
      transition: { duration: 0.2, ease: "easeOut", delay: 0.3 },
    },
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

        <div className="hidden lg:flex items-center px-6 xl:px-12 pt-5 w-full rounded-md">
          <ul className="flex gap-3 xl:gap-4 items-center text-left">
            {links.map((link) => (
              <li
                key={link.href}
                className="relative group tracking-wider font-thin"
              >
                {link.external ? (
                  <motion.button
                    className="text-white text-md px-4 py-2 relative z-10 hover:text-opacity-70 transition-all duration-200 ease-in-out"
                    onClick={() => window.open(link.href, "_blank")}
                  >
                    {link.text}
                  </motion.button>
                ) : (
                  <SmoothScrollLink
                    href={getLinkHref(link, pathname)}
                    className="text-white text-md px-4 py-2 relative z-10 hover:text-opacity-70 transition-all duration-200 ease-in-out"
                  >
                    {link.text}
                  </SmoothScrollLink>
                )}
              </li>
            ))}
          </ul>
          <div className="ml-auto lg:flex hidden gap-4 pr-4 text-white text-normal absolute right-0 z-50 opacity-85">
            <a
              href={`tel:${contact.phone}`}
              className="hover:opacity-80 trasition-all ease-in-out hover:scale-125 duration-300 transition-transform"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="hover:opacity-80 trasition-all ease-in-out hover:scale-125 duration-300 transition-transform"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 trasition-all ease-in-out hover:scale-125 duration-300 transition-transform"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="hidden md:flex text-center justify-center text-2xl w-full left-0 absolute">
            <a href="./" className="font-extralight tracking-wide">
              MÁRKUS SZALON
            </a>
          </div>
        </div>

        {/* Hamburger menu */}
        <motion.div
          variants={hamburgerVariants}
          initial="visible"
          animate={hidden ? "hidden" : "visible"}
          className="lg:hidden fixed top-6 right-3 z-50 p-2"
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
              <div className="lg:hidden fixed bottom-2 w-full flex justify-center gap-8 text-white text-2xl z-50 opacity-85 pb-12">
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Navbar;
