"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState<"no" | "ferfi" | "gyerek">("no");
  const [selectedLength, setSelectedLength] = useState<"rovid" | "felhoszu" | "hosszu">("rovid");

  const servicesData = {
    no: {
      rovid: [
        { name: "Mosás + Szárítás", price: 5000, time: "60 perc" },
        { name: "Tőszőkítés", price: 10000, time: "60 perc" },
        { name: "Teljes szőkítés", price: 12000, time: "60 perc" },
        { name: "Ammóniamentes festés", price: 9000, time: "60-90 perc" },
        { name: "Ombré/szabadkézi technika", price: 10000, time: "60-90 perc" },
        { name: "Tőfestés/Teljes festés + melír", price: 10000, time: "60-90 perc" },
      ],
      felhoszu: [
        { name: "Mosás + Szárítás", price: 6000, time: "60 perc" },
        { name: "Tőszőkítés", price: 12500, time: "60 perc" },
        { name: "Teljes szőkítés", price: 15500, time: "60 perc" },
        { name: "Ammóniamentes festés", price: 12000, time: "60-90 perc" },
        { name: "Ombré/szabadkézi technika", price: 10000, time: "60-90 perc" },
        { name: "Tőfestés/Teljes festés + melír", price: 13000, time: "60-90 perc" },
      ],
      hosszu: [
        { name: "Mosás + Szárítás", price: 7000, time: "60 perc" },
        { name: "Tőszőkítés", price: 16000, time: "60 perc" },
        { name: "Teljes szőkítés", price: 19000, time: "60 perc" },
        { name: "Ammóniamentes festés", price: 15000, time: "60-90 perc" },
        { name: "Ombré/szabadkézi technika", price: 10000, time: "60-90 perc" },
        { name: "Tőfestés/Teljes festés + melír", price: 16000, time: "60-90 perc" },
      ],
    },
    ferfi: [
      { name: "Férfi hajvágás mosással", price: 4000, time: "40 perc" },
      { name: "Férfi hajvágás mosás nélkül", price: 3500, time: "30 perc" },
      { name: "Gépi átmenet", price: 3000, time: "20 perc" },
      { name: "Vasalás/Göndörítés/Trimelés", price: 1000, time: "15-30 perc" },
    ],
    gyerek: [
      { name: "Fiú hajvágás 10 éves korig", price: 3600, time: "30 perc" },
      { name: "Fiú mosás + szárítás", price: 2500, time: "20 perc" },
      { name: "Lány hajvágás 10 éves korig", price: 4500, time: "30 perc" },
      { name: "Gyermek hajmosás + szárítás", price: 3500, time: "20 perc" },
    ],
  };

  type ServiceItem = {
    label: string;
    services: { name: string; price: number; time: string }[];
  };

  const allServices: ServiceItem[] =
    selectedCategory === "no"
      ? [{ label: selectedLength, services: servicesData.no[selectedLength] }]
      : selectedCategory === "ferfi"
      ? [{ label: "Férfi hajvágás", services: servicesData.ferfi }]
      : [{ label: "Gyermek hajvágás", services: servicesData.gyerek }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const serviceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="bg-gradient-to-t from-[#9f8e53] to-[#54402f] pb-4 sm:pb-5 md:pb-8">
      <div className="grid p-4 sm:p-6 h-auto w-full max-w-5xl mx-auto scroll-mt-20" id="szolgaltatasok">
        <h1 className="text-2xl sm:text-3xl justify-self-center my-8 sm:my-12 text-white">Szolgáltatások</h1>

        {/* Felső gombok */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8">
          <button
            onClick={() => {
              setSelectedCategory("no");
              setSelectedLength("rovid");
            }}
            className={`relative px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white border border-[#8d7341] rounded-md transition-all duration-300 ease-in-out ${
              selectedCategory === "no"
                ? "bg-[#8d7341] bg-opacity-30"
                : "bg-transparent hover:bg-[#8d7341] hover:bg-opacity-20"
            }`}
          >
            Női
          </button>
          <button
            onClick={() => {
              setSelectedCategory("ferfi");
            }}
            className={`relative px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white border border-[#8d7341] rounded-md transition-all duration-300 ease-in-out ${
              selectedCategory === "ferfi"
                ? "bg-[#8d7341] bg-opacity-30"
                : "bg-transparent hover:bg-[#8d7341] hover:bg-opacity-20"
            }`}
          >
            Férfi
          </button>
          <button
            onClick={() => {
              setSelectedCategory("gyerek");
            }}
            className={`relative px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white border border-[#8d7341] rounded-md transition-all duration-300 ease-in-out ${
              selectedCategory === "gyerek"
                ? "bg-[#8d7341] bg-opacity-30"
                : "bg-transparent hover:bg-[#8d7341] hover:bg-opacity-20"
            }`}
          >
            Gyerek
          </button>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {allServices.map(({ label, services }, groupIndex) => (
            <div key={groupIndex}>
              {/* Kategóriaválasztó gombok vagy címke */}
              <div className="mb-6 sm:mb-8">
                {selectedCategory === "no" ? (
                  <div className="flex justify-center gap-4 sm:gap-8 md:gap-10">
                    <button
                      onClick={() => setSelectedLength("rovid")}
                      className={`relative px-4 py-2 text-base sm:text-lg md:text-xl font-medium text-white transition-all duration-200 ease-in-out ${
                        selectedLength === "rovid"
                          ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8d7341]"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      Rövid
                    </button>
                    <button
                      onClick={() => setSelectedLength("felhoszu")}
                      className={`relative px-4 py-2 text-base sm:text-lg md:text-xl font-medium text-white transition-all duration-200 ease-in-out ${
                        selectedLength === "felhoszu"
                          ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8d7341]"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      Félhosszú
                    </button>
                    <button
                      onClick={() => setSelectedLength("hosszu")}
                      className={`relative px-4 py-2 text-base sm:text-lg md:text-xl font-medium text-white transition-all duration-200 ease-in-out ${
                        selectedLength === "hosszu"
                          ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8d7341]"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      Hosszú
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <span
                      className={`relative px-4 py-2 text-base sm:text-lg md:text-xl font-medium text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8d7341]`}
                    >
                      {label}
                    </span>
                  </div>
                )}
              </div>

              {/* Szolgáltatások listája */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory}-${selectedLength}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-3 sm:space-y-4"
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={serviceVariants}
                      className="flex flex-row justify-between items-center p-3 sm:p-4 border border-gray-300 rounded-lg bg-white bg-opacity-10 shadow-md text-white transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => window.open("https://markusszalon.salonic.hu/services", "_blank")}
                    >
                      <div className="flex-1">
                        <p className="text-sm sm:text-base md:text-lg font-medium">{service.name}</p>
                        <p className="text-xs sm:text-sm opacity-80">{service.time}</p>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-medium text-right w-20 sm:w-24 md:w-28 text-nowrap">
                        {service.price} Ft
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
