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

  const allServices =
    selectedCategory === "no"
      ? [{ length: selectedLength, services: servicesData.no[selectedLength] }]
      : selectedCategory === "ferfi"
      ? [{ length: "Férfi", services: servicesData.ferfi }]
      : [{ length: "Gyerek", services: servicesData.gyerek }];

  // Animation variants for the container and service items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 0.1s delay between each child
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const serviceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="bg-gradient-to-t from-[#ad9451] to-[#54402f]">
      <div className="grid p-4 sm:p-6 h-auto w-full max-w-4xl mx-auto" id="szolgaltatasok">
        <h1 className="text-2xl sm:text-3xl justify-self-center my-8 sm:my-12 text-white">Szolgáltatások</h1>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
          <button
            onClick={() => {
              setSelectedCategory("no");
              setSelectedLength("rovid");
            }}
            className={`p-2 px-6 sm:p-3 sm:px-8 rounded-xl transition-transform duration-200 ease-in-out text-sm sm:text-base ${
              selectedCategory === "no" ? "bg-[#8d7341] text-white" : "bg-[#b49f5b]"
            } hover:bg-[#8d7341] hover:bg-opacity-60 active:scale-95`}
          >
            Női
          </button>
          <button
            onClick={() => {
              setSelectedCategory("ferfi");
            }}
            className={`p-2 px-6 sm:p-3 sm:px-8 rounded-xl transition-transform duration-200 ease-in-out text-sm sm:text-base ${
              selectedCategory === "ferfi" ? "bg-[#8d7341] text-white" : "bg-[#b49f5b]"
            } hover:bg-[#8d7341] hover:bg-opacity-60 active:scale-95`}
          >
            Férfi
          </button>
          <button
            onClick={() => {
              setSelectedCategory("gyerek");
            }}
            className={`p-2 px-6 sm:p-3 sm:px-8 rounded-xl transition-transform duration-200 ease-in-out text-sm sm:text-base ${
              selectedCategory === "gyerek" ? "bg-[#8d7341] text-white" : "bg-[#b49f5b]"
            } hover:bg-[#8d7341] hover:bg-opacity-60 active:scale-95`}
          >
            Gyerek
          </button>
        </div>

        {/* Hosszúság szűrők a Női kategóriához */}
        {selectedCategory === "no" && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <button
              onClick={() => setSelectedLength("rovid")}
              className={`p-2 px-6 sm:p-3 sm:px-8 rounded-xl transition-transform duration-200 ease-in-out text-sm sm:text-base ${
                selectedLength === "rovid" ? "bg-[#8d7341] text-white" : "bg-[#b49f5b]"
              } hover:bg-[#8d7341] hover:bg-opacity-60 active:scale-95`}
            >
              Rövid
            </button>
            <button
              onClick={() => setSelectedLength("felhoszu")}
              className={`p-2 px-6 sm:p-3 sm:px-8 rounded-xl transition-transform duration-200 ease-in-out text-sm sm:text-base ${
                selectedLength === "felhoszu" ? "bg-[#8d7341] text-white" : "bg-[#b49f5b]"
              } hover:bg-[#8d7341] hover:bg-opacity-60 active:scale-95`}
            >
              Félhosszú
            </button>
            <button
              onClick={() => setSelectedLength("hosszu")}
              className={`p-2 px-6 sm:p-3 sm:px-8 rounded-xl transition-transform duration-200 ease-in-out text-sm sm:text-base ${
                selectedLength === "hosszu" ? "bg-[#8d7341] text-white" : "bg-[#b49f5b]"
              } hover:bg-[#8d7341] hover:bg-opacity-60 active:scale-95`}
            >
              Hosszú
            </button>
          </div>
        )}


        <div className="space-y-6">
          {allServices.map(({ length, services }, groupIndex) => (
            <div key={groupIndex}>
              <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                {length === "rovid" ? "Rövid haj" : length === "felhoszu" ? "Félhosszú haj" : length === "hosszu" ? "Hosszú haj" : length}
              </h2>
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
                        <p className="text-base sm:text-lg font-medium">{service.name}</p>
                        <p className="text-xs sm:text-sm opacity-80">{service.time}</p>
                      </div>
                      <p className="text-base sm:text-lg font-medium text-right w-24 sm:w-28 text-nowrap">{service.price} Ft</p>
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