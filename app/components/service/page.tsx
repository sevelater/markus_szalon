"use client";

import { useState } from "react";

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState<"no" | "ferfi" | "gyerek">("no");
  const [selectedLength, setSelectedLength] = useState<"rovid" | "felhoszu" | "hosszu" | null>(null); // Szűrő a női hosszúságokra
  const [showAll, setShowAll] = useState(false); // Állapot az összes hosszúság megjelenítéséhez

  const servicesData = {
    no: {
      rovid: [
        { name: "Mosás + Szárítás", price: 5000, time: "60 perc" },
        { name: "Mosás + Szárítás", price: 6000, time: "60 perc" },
        { name: "Tőszőkítés", price: 10000, time: "60 perc" },
        { name: "Teljes szőkítés", price: 12000, time: "60 perc" },
        { name: "Ammóniamentes festés", price: 9000, time: "60-90 perc" },
        { name: "Ombré/szabadkézi technika", price: 10000, time: "60-90 perc" },
        { name: "Tőfestés/Teljes festés + melír", price: 10000, time: "60-90 perc" },
      ],
      felhoszu: [
        { name: "Mosás + Szárítás", price: 6000, time: "60 perc" },
        { name: "Mosás + Szárítás", price: 7000, time: "60 perc" },
        { name: "Tőszőkítés", price: 12500, time: "60 perc" },
        { name: "Teljes szőkítés", price: 15500, time: "60 perc" },
        { name: "Ammóniamentes festés", price: 12000, time: "60-90 perc" },
        { name: "Ombré/szabadkézi technika", price: 10000, time: "60-90 perc" },
        { name: "Tőfestés/Teljes festés + melír", price: 13000, time: "60-90 perc" },
      ],
      hosszu: [
        { name: "Mosás + Szárítás", price: 7000, time: "60 perc" },
        { name: "Mosás + Szárítás", price: 8000, time: "60 perc" },
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

  // Szolgáltatások lekérése a kiválasztott hosszúság és "Továbbiak mutatása" alapján
  const allServices = selectedCategory === "no" && selectedLength
    ? [{ length: selectedLength, services: servicesData.no[selectedLength] }]
    : selectedCategory === "no" && !selectedLength && !showAll
    ? [{ length: "rovid", services: servicesData.no.rovid }]
    : selectedCategory === "no" && !selectedLength && showAll
    ? Object.entries(servicesData.no).map(([length, services]) => ({ length, services }))
    : selectedCategory === "ferfi"
    ? [{ length: "Férfi", services: servicesData.ferfi }]
    : [{ length: "Gyerek", services: servicesData.gyerek }];

  return (
    <div className="grid p-4 sm:p-6 h-auto w-full max-w-4xl mx-auto" id="services">
      {/* Főcím */}
      <h1 className="text-2xl sm:text-3xl justify-self-center my-8 sm:my-12">Szolgáltatások</h1>

      {/* Kategóriaváltó gombok */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        <button
          onClick={() => {
            setSelectedCategory("no");
            setSelectedLength(null);
            setShowAll(false);
          }}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-slate-500 transition-transform duration-200 ease-in-out text-sm sm:text-base ${
            selectedCategory === "no" ? "bg-slate-700 text-white" : "bg-slate-400"
          } hover:bg-slate-600 active:scale-95 active:bg-slate-800`}
        >
          Női
        </button>
        <button
          onClick={() => {
            setSelectedCategory("ferfi");
            setSelectedLength(null);
            setShowAll(false);
          }}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-slate-500 transition-transform duration-200 ease-in-out text-sm sm:text-base ${
            selectedCategory === "ferfi" ? "bg-slate-700 text-white" : "bg-slate-400"
          } hover:bg-slate-600 active:scale-95 active:bg-slate-800`}
        >
          Férfi
        </button>
        <button
          onClick={() => {
            setSelectedCategory("gyerek");
            setSelectedLength(null);
            setShowAll(false);
          }}
          className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-slate-500 transition-transform duration-200 ease-in-out text-sm sm:text-base ${
            selectedCategory === "gyerek" ? "bg-slate-700 text-white" : "bg-slate-400"
          } hover:bg-slate-600 active:scale-95 active:bg-slate-800`}
        >
          Gyerek
        </button>
      </div>

      {/* Hosszúság szűrők a Női kategóriához */}
      {selectedCategory === "no" && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
          <button
            onClick={() => {
              setSelectedLength(null);
              setShowAll(false);
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-slate-500 transition-transform duration-200 ease-in-out text-sm sm:text-base ${
              selectedLength === null && !showAll ? "bg-slate-700 text-white" : "bg-slate-400"
            } hover:bg-slate-600 active:scale-95 active:bg-slate-800`}
          >
            Mind
          </button>
          <button
            onClick={() => {
              setSelectedLength("rovid");
              setShowAll(false);
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-slate-500 transition-transform duration-200 ease-in-out text-sm sm:text-base ${
              selectedLength === "rovid" ? "bg-slate-700 text-white" : "bg-slate-400"
            } hover:bg-slate-600 active:scale-95 active:bg-slate-800`}
          >
            Rövid
          </button>
          <button
            onClick={() => {
              setSelectedLength("felhoszu");
              setShowAll(false);
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-slate-500 transition-transform duration-200 ease-in-out text-sm sm:text-base ${
              selectedLength === "felhoszu" ? "bg-slate-700 text-white" : "bg-slate-400"
            } hover:bg-slate-600 active:scale-95 active:bg-slate-800`}
          >
            Félhosszú
          </button>
          <button
            onClick={() => {
              setSelectedLength("hosszu");
              setShowAll(false);
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-slate-500 transition-transform duration-200 ease-in-out text-sm sm:text-base ${
              selectedLength === "hosszu" ? "bg-slate-700 text-white" : "bg-slate-400"
            } hover:bg-slate-600 active:scale-95 active:bg-slate-800`}
          >
            Hosszú
          </button>
        </div>
      )}

      {/* Szolgáltatások listája */}
      <div className="space-y-6">
        {allServices.map(({ length, services }, groupIndex) => (
          <div key={groupIndex}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              {length === "rovid" ? "Rövid haj" : length === "felhoszu" ? "Félhosszú haj" : length === "hosszu" ? "Hosszú haj" : length}
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-between items-center p-3 sm:p-4 border border-gray-300 rounded-lg bg-transparent shadow-md"
                >
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-medium">{service.name}</p>
                    <p className="text-xs sm:text-sm text-slate-400">{service.time}</p>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-right w-24 sm:w-28 text-nowrap">{service.price} Ft</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* "Továbbiak mutatása" gomb */}
      {selectedCategory === "no" && selectedLength === null && !showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg border border-slate-500 transition-transform duration-200 ease-in-out text-sm sm:text-base bg-slate-400 hover:bg-slate-600 active:scale-95 active:bg-slate-800"
          >
            Továbbiak mutatása
          </button>
        </div>
      )}
    </div>
  );
};

export default Service;