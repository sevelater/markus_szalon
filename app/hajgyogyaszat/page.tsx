"use client";

import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hajgyogyaszat = () => {
  return (
    <div className="text-gray-100 overflow-hidden bg-gradient-to-t from-[#dadada] to-[#b8b8b8] bg-opacity-40">
      <div className="relative bg-[url('/hairmedicine.jpg')] bg-cover bg-center w-full py-56 lg:py-60 flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <h1 className="text-white text-[38px] sm:text-[45px] md:text-[65px] lg:text-[80px] lg:font-extrabold font-medium font-main max-w-2xl">
            Hajgyógyászati kezelés
          </h1>
        </div>
      </div>

      <div className="py-0.5 bg-[#302118]" id="line"></div>

      {/* Main section */}

      <div className="bg-gradient-to-t to-[#7cd168]/30 from-[#a7d89d]/50 justify-items-center flex justify-center flex-col py-20">
        <div className="flex-col justify-items-center justify-center">
          <h1 className="font-bold text-[30px] pb-20 mx-5 text-center">
            Miért jobb egy növényi terméket használni?
          </h1>

          <div className="max-w-lg mx-5 justify-center">
            <div className="flex text-center gap-x-10 justify-items-center items-center justify-center mb-5">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2xl"
                className="bg-green-900 rounded-full"
              />
              <p className="text-center text-sm p-2 font-medium tracking-wide">
                Nem tartalmaz perszulfátokat, kemikáliákat, ezzel az egészséget
                sem károsítja
              </p>
            </div>

            <div className="h-0.5 bg-green-900" id="line"></div>

            <div className="flex text-center gap-x-10 justify-items-center items-center justify-center mb-5">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2xl"
                className="bg-green-900 rounded-full"
              />
              <p className="text-center text-sm p-2 font-medium tracking-wide">
                Eltávolítja a felgyülemlett rosszindulatú anyagokat és megelőzi
                azoknak megjelenését
              </p>
            </div>

            <div className="h-0.5 bg-green-900" id="line"></div>

            <div className="flex text-center gap-x-10 justify-items-center items-center justify-center mb-5">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2xl"
                className="bg-green-900 rounded-full"
              />
              <p className="text-center text-sm p-2 font-medium tracking-wide">
                Nem tartalmaz perszulfátokat, kemikáliákat, ezzel az egészséget
                sem károsítja
              </p>
            </div>

            <div className="h-0.5 bg-green-900" id="line"></div>

            <div className="flex text-center gap-x-10 justify-items-center items-center justify-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2xl"
                className="bg-green-900 rounded-full"
              />
              <p className="text-center text-sm p-2 font-medium tracking-wide">
                Nem tartalmaz perszulfátokat, kemikáliákat, ezzel az egészséget
                sem károsítja
              </p>
            </div>
          </div>
          <div className="justify-items-center pt-10 flex justify-center md:gap-x-10">
            <img 
            src="hairmedicine2.jpg" 
            alt="semi di lino termékek" 
            className="w-1/4 h-auto max-w-sm"
            />
            <img 
            src="hairmedicine3.png" 
            alt="semi di lino termékek" 
            className="w-1/4 max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hajgyogyaszat;

// Általában a felgyülemlett anyagoktól lesznek a fejbőrproblémák, amik korpásodáshoz, hajhulláshoz, vagy gyulladáshoz vezethetnek.
// Ezért fontosak a növényi alapú termékek, amik magas hatóanyaggal rendelkeznek, hogy a haj és a fejbőr mindig egészséges maradjon.
// Nálam nem csak a növényi alapú termékek találhatóak meg, de a fejbőrproblémát segítő anyagok is. Mindenkit kérek aki fejbőrprobléma kezelésére jönne,
// hogy előtte jöjjön el egy konzultációra hogy megbeszéljük a folyamatot, az otthoni ápolást.
