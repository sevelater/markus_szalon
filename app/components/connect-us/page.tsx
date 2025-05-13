"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

interface Contact {
  phone: string;
  email: string;
  facebook: string;
  mapEmbed: string;
}

const Footer = () => {
  const [contact, setContact] = useState<Contact>({
    phone: "",
    email: "",
    facebook: "",
    mapEmbed: "",
  });

  useEffect(() => {
    const docRef = doc(db, "settings", "general");

    // Valós idejű figyelés a Firestore dokumentum változásaira
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setContact(
            data.contact || {
              phone: "+36 70 598 5439",
              email: "gabika20040218@gmail.com",
              facebook:
                "https://www.facebook.com/profile.php?id=61568795877252&sk=photos",
              mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d1123.047502066955!2d18.9291557!3d47.5087590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741df0050b826a9%3A0x5f2293613cb47231!2sM%C3%A1rkus%20Szalon!5e0!3m2!1shu!2shu!4v1740394854670!5m2!1hu!2shu",
            }
          );
        } else {
          console.warn("A dokumentum nem létezik!");
        }
      },
      (err) => {
        console.error("Hiba a valós idejű adatlekérdezés során:", err);
      }
    );

    // Tisztítás: leállítjuk a figyelőt, amikor a komponens kilép
    return () => unsubscribe();
  }, []);

  return (
    <div className="object-bottom h-full">
      <div className="pb-5 md:pb-20 lg:pb-24 grid lg:justify-evenly h-auto bg-gradient-to-t from-[#ad9451] to-[#54402f] sm:grid md:flex lg:flex p-3 gap-y-8 lg:gap-x-12 md:gap-x-12 lg:pt-12 md:pt-10 md:justify-evenly">
        {/* Térkép */}
        <div className="h-72 sm:h-80 md:h-[250px] lg:h-[300px] w-full md:max-w-[500px] lg:max-w-[800px] rounded-md sm:w-full md:w-2/3 lg:w-6/12">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=47.5087590,18.9291557"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <iframe
              src={
                contact.mapEmbed ||
                "https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d1123.047502066955!2d18.9291557!3d47.5087590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741df0050b826a9%3A0x5f2293613cb47231!2sM%C3%A1rkus%20Szalon!5e0!3m2!1shu!2shu!4v1740394854670!5m2!1hu!2shu"
              }
              style={{ border: 0 }}
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-md pointer-events-none mt-2"
            ></iframe>
          </a>
        </div>

        <div className="hidden md:block md:w-px md:h-[240px] lg:h-[280px] bg-gray-300 mx-4 self-center"></div>

        {/* Kapcsolat */}
        <div className="h-auto md:h-[250px] lg:h-[260px] flex flex-col">
          <h1 className="mb-4 ml-2 text-2xl font-semibold text-white">
            Kapcsolat
          </h1>
          <div className="gap-y-3 pb-5 px-5 pt-5 md:pb-8 md:pt-8 lg:py-10 rounded-md md:rounded-lg lg:rounded-lg font-sans border border-gray-300 bg-white bg-opacity-10 text-white flex-1 flex flex-col justify-between md:gap-y-6 lg:gap-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                className="text-gray-200 w-auto"
              />
              <a
                href={`tel:${contact.phone}`}
                className="ml-3 hover:text-gray-300 transition-colors"
              >
                {contact.phone || "+36 70 598 5439"}
              </a>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                className="text-gray-200 w-auto"
              />
              <a
                href={`mailto:${contact.email}`}
                className="ml-3 hover:text-gray-300 transition-colors"
              >
                {contact.email || "gabika20040218@gmail.com"}
              </a>
            </div>

            <div className="w-auto">
              <button
                className="flex items-center hover:text-gray-300 transition-colors w-auto"
                onClick={() => {
                  window.open(
                    contact.facebook ||
                      "https://www.facebook.com/profile.php?id=61568795877252&sk=photos",
                    "_blank"
                  );
                }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  className="text-gray-200"
                />
                <span className="ml-3">Márkus Szalon</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="p-5 text-center border-t bg-[#9e895a]">
        © 2025 Márkus Szalon
      </p>
    </div>
  );
};

export default Footer;