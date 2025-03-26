"use client";

import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hajgyogyaszat = () => {
  return (
    <div className="text-gray-100 overflow-hidden bg-gradient-to-t from-[#dadada] to-[#b8b8b8] bg-opacity-40">
      {/* Header */}
      <div className="relative bg-[url('/hairmedicine.jpg')] bg-cover bg-center w-full py-32 sm:py-48 lg:py-60 flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-main max-w-3xl px-4">
            Hajgyógyászati kezelés
          </h1>
        </div>
      </div>

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      {/* Main section */}
      <div className="bg-gradient-to-t to-[#7cd168]/20 from-[#a7d89d]/40 flex flex-col items-center py-16 sm:py-20 px-4">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row lg:flex-wrap gap-12 justify-center sm:justify-start lg:justify-evenly items-center">
          {/* Hajhullás elleni kezelés */}
          <section className="flex flex-col items-center max-w-md w-full">
            <h1 className="font-bold text-3xl sm:text-4xl pb-10 text-center text-gray-800">
              Hajhullás elleni kezelés
            </h1>
            <div className="flex flex-col gap-6 justify-center items-center">
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Sampon</strong>: Kíméletes, <strong>hajhullásra hajlamos hajra</strong>, probiotikumokkal és prebiotikumokkal erősít, <strong>szulfát- és paraffinmentes</strong>.
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Ampulla</strong>: Fejbőrbe masszírozandó, <strong>nem lemosandó</strong>, többször használható.
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Fontos</strong>: Belső problémák (pl. <strong>gyulladás</strong>) esetén először azt kell kezelni.
                </p>
              </div>
            </div>
          </section>

          {/* Semi di Lino Style Care – Hajformázás */}
          <section className="flex flex-col items-center max-w-md w-full">
            <h1 className="font-bold text-3xl sm:text-4xl pb-10 text-center text-gray-800">
              Semi di Lino Style Care – Hajformázás
            </h1>
            <div className="flex flex-col gap-6 justify-center items-center">
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Vegán</strong>, újrahasznosított csomagolás.
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>100% természetes hatóanyagok</strong> (hialuronsav, fruktóz).
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Syle Guard komplex</strong>: Hővédő, párataszító, <strong>anti-frizz</strong>, könnyű formázás.
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Természetes illatok</strong>: rózsabors, körte, vanília, cédrus stb.
                </p>
              </div>
            </div>
          </section>

          {/* Miért növényi termék? */}
          <section className="flex flex-col items-center max-w-md w-full">
            <h1 className="font-bold text-3xl sm:text-4xl pb-10 text-center text-gray-800">
              Miért növényi termék?
            </h1>
            <div className="flex flex-col gap-6 justify-center items-center">
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  Nem tartalmaz <strong>káros kemikáliákat</strong> (pl. perszulfát).
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  Megelőzi a <strong>fejbőrproblémákat</strong> (korpásodás, hajhullás, gyulladás).
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Egészséges haj és fejbőr</strong> magas hatóanyagtartalommal.
                </p>
              </div>
            </div>
          </section>

          {/* Szolgáltatásaim */}
          <section className="flex flex-col items-center max-w-md w-full">
            <h1 className="font-bold text-3xl sm:text-4xl pb-10 text-center text-gray-800">
              Szolgáltatásaim
            </h1>
            <div className="flex flex-col gap-6 justify-center items-center">
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Növényi alapú termékek</strong> + fejbőrprobléma-kezelés.
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Konzultáció</strong>: folyamat és otthoni ápolás megbeszélése.
                </p>
              </div>
              <div className="h-px bg-green-900/30 w-full lg:hidden"></div>
              <div className="flex items-center gap-4 w-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="xl"
                  className="text-green-800 flex-shrink-0"
                />
                <p className="text-lg font-medium text-gray-700 text-center">
                  <strong>Cél</strong>: Szép, <strong>egészséges haj</strong> visszanyerése.
                </p>
              </div>
            </div>
          </section>

          {/* Alapismertető: Mi is a hajgyógyászat? */}
          <section className="flex flex-col items-center max-w-md w-full">
            <h1 className="font-bold text-3xl sm:text-4xl pb-10 pt-5 text-center text-gray-800">
              Mi is a hajgyógyászat?
            </h1>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg font-medium text-gray-700">
                A hajgyógyászat a haj és fejbőr <strong>egészségét</strong> állítja helyre <strong>természetes módszerekkel</strong>. Célja a problémák (pl. <strong>hajhullás</strong>, korpásodás) kezelése. <strong>Személyre szabott kezelést</strong> és ápolási rutint kínál, <strong>növényi, kemikáliamentes termékekkel</strong>. <br />Egészséges, szép haj a végeredmény!
              </p>
            </div>
          </section>
        </div>

        {/* Képek */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-start gap-6 pt-10">
          <img
            src="hairmedicine2.jpg"
            alt="semi di lino termékek"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="hairmedicine3.png"
            alt="semi di lino termékek"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hajgyogyaszat;