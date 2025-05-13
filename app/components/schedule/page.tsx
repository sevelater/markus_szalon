"use client";

import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

// A hét napjainak típusbiztos tömbje
const daysOrder = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"] as const;

// Schedule típusának pontosítása a daysOrder alapján
type Schedule = {
  [K in typeof daysOrder[number]]: string;
};

const defaultSchedule: Schedule = {
  Hétfő: "9:00 - 17:00",
  Kedd: "9:00 - 17:00",
  Szerda: "9:00 - 17:00",
  Csütörtök: "9:00 - 17:00",
  Péntek: "9:00 - 17:00",
  Szombat: "Zárva",
  Vasárnap: "Zárva",
};

const Page = () => {
  const [schedule, setSchedule] = useState<Schedule>(defaultSchedule);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const docRef = doc(db, "settings", "general");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSchedule(data.schedule || defaultSchedule);
        }
      } catch (err) {
        console.error("Hiba a nyitvatartás lekérdezése során:", err);
      }
    };
    fetchSchedule();
  }, []);

  return (
    <div
      className="bg-[url('/background.png')] bg-cover bg-center h-auto justify-items-center text-center w-full 
                 lg:bg-[url('/calendar.jpg')] 
                 md:bg-[url('/desktop.jpg')]"
      id="schedule__1"
    >
      <div className="w-full bg-black bg-opacity-50 md:py-5">
        <div
          className="flex gap-12 mx-1 py-5 px-9 justify-center w-full scroll-mt-20 font-main tracking-wide"
          id="elerhetosegek"
        >
          <div className="text-gray-200 pt-5 pb-5">
            {daysOrder.map((day) => (
              <h3
                key={day}
                className="mb-0.5 text-sm sm:text-lg lg:text-lg font-medium"
              >
                {day}
              </h3>
            ))}
          </div>

          <div className="bg-slate-50 h-auto w-px pt-5 pb-5 my-2 lg:my-3 md:my-2.5"></div>

          <div className="text-gray-200 pt-5 pb-5 justify-items-center">
            {daysOrder.map((day) => (
              <h4
                key={day}
                className="mb-0.5 text-sm sm:text-lg lg:text-lg font-medium"
              >
                {schedule[day] || "Nincs adat"}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;