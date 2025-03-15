"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Animation variants for text and images
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children animations
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.4 },
  },
};

const Hairmedicine = () => {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Navbar with scroll-hiding effect */}
      <motion.div
        variants={{
          visible: { opacity: 1 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="fixed top-0 left-0 w-full flex justify-between bg-slate-100 drop-shadow-lg backdrop-blur-md bg-opacity-20 p-5 z-30"
      >
        <a href="../" className="text-2xl font-sans transition-opacity text-white">
          Márkus Szalon
        </a>
      </motion.div>

      {/* Main content */}
      <div className="bg-gradient-to-t from-[#ad9451] to-[#54402f] min-h-screen pt-32 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          {/* Hero Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h1 variants={headingVariants} className="text-4xl sm:text-5xl font-semibold mb-4">
              Hajgyógyászat
            </motion.h1>
            <motion.p variants={textVariants} className="text-lg sm:text-xl opacity-80">
              Célom, hogy mindenki visszanyerje a haja szépségét! Gyere el egy konzultációra, és
              elmondom neked, mi a megfelelő hajkezelés, valamint otthoni tanácsadást is adok!
            </motion.p>
          </motion.section>

          {/* Hair Loss Treatment Section with Image */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <motion.h2
              variants={headingVariants}
              className="text-2xl sm:text-3xl font-semibold mb-4"
            >
              Hajhullás Elleni Kezelés
            </motion.h2>
            <motion.div variants={textVariants}>
              <p className="mb-4">
                A hajhullás elleni kezelés 2 lépésből áll:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Samponozás:</strong> Ez a sampon kíméletes, és legyengült, hajhullásra
                  hajlamos hajra való. Tisztítás közben rostokat ad a hajnak, azaz probiotikumot és
                  prebiotikumokat tartalmaz, ami segít a fejbőr egyensúlyát megtartani. Szulfát-,
                  paraffin- és ásványi olajmentes!
                </li>
                <li>
                  <strong>Renew Hair Loss Ampulla:</strong> Összetevőiben ugyanaz, mint a sampon,
                  de ezt közvetlenül a fejbőrbe kell masszírozni, és nem szabad lemosni. Az ampulla
                  többször is használható, a hajhullás mértékétől függően.
                </li>
              </ul>
              <p className="text-red-300 font-semibold mb-6">
                Fontos: Ha valakinek belsőleg van gyulladása, vagy olyan betegsége, ami még nincs
                kezelve, és a hajhullás kiváltó okai ezek, akkor a kezelés nem fog segíteni!
                Először a belső szervi problémákat kell kezelni.
              </p>
            </motion.div>
            <motion.div
              variants={imageVariants}
              className="flex justify-center"
            >
              <img
                src="/hair-loss-ampullas.jpg"
                alt="Renew Hair Loss Ampullas"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.section>

          {/* Semi di Lino Style Care Section with Image */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <motion.h2
              variants={headingVariants}
              className="text-2xl sm:text-3xl font-semibold mb-4"
            >
              Semi di Lino Style Care – Hajformázó Koncepció
            </motion.h2>
            <motion.div variants={textVariants}>
              <p className="mb-4">
                A tökéletes fodrász nemcsak gyakorlatban ad minőségi munkát, hanem a termékeivel
                is. Ez a termékcsalád segít a végső forma kialakításában, kezelhetővé teszi a hajat,
                és védelmet nyújt a hajat felépítő rostokban. Amit a termékről tudni lehet:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Az összes formula vegán.</li>
                <li>Az összes csomagolóeszköz újrahasznosított.</li>
                <li>Állati összetevőktől és azok származékaitól mentes.</li>
                <li>
                  100%-ban természetes eredetű hatóanyagokat tartalmaz (hialuronsavat és fruktózt).
                </li>
                <li>
                  Syle Guard komplexet tartalmaz, ami hővédő, párataszító, anti-frizz hatással
                  rendelkezik, és megkönnyíti a hajformázás folyamatát.
                </li>
                <li>
                  Illatai természetes hatóanyagokból készülnek: Rózsabors, Körte, Feketeribizli,
                  Rózsa, Jázmin, Vaníliavirág és Cédrus óvja a hajat károsodás nélkül!
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={imageVariants}
              className="flex justify-center"
            >
              <img
                src="/semi-di-lino-products.jpg"
                alt="Semi di Lino Style Care Products"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.section>

          {/* Why Plant-Based Products Section with Image */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <motion.h2
              variants={headingVariants}
              className="text-2xl sm:text-3xl font-semibold mb-4"
            >
              Miért Jobb Egy Növényi Termék?
            </motion.h2>
            <motion.div variants={textVariants}>
              <p className="mb-4">
                A növényi termékek nem tartalmaznak perszulfátokat és kemikáliákat, amelyek nem
                csak a hajra, hanem hosszú távon az egészségre is károsak lehetnek. Általában a
                felgyülemlett anyagoktól alakulnak ki fejbőrproblémák, amelyek korpásodáshoz,
                hajhulláshoz vagy gyulladáshoz vezethetnek. Ezért fontosak a növényi alapú
                termékek, amelyek magas hatóanyagtartalommal rendelkeznek, hogy a haj és a fejbőr
                mindig egészséges maradjon.
              </p>
              <p className="mb-4">
                Nálam nem csak növényi alapú termékek találhatóak meg, hanem a fejbőrproblémákat
                segítő anyagok is. Mindenkit kérek, aki fejbőrprobléma kezelésére jönne, hogy
                előtte jöjjön el egy konzultációra, hogy megbeszéljük a folyamatot és az otthoni
                ápolást.
              </p>
              <p className="text-lg font-medium mb-6">
                Ha még nem találtad meg a megfelelő hajkezelési rutinodat, jelentkezz be hozzám, és
                én segítségedre leszek!
              </p>
            </motion.div>
            <motion.div
              variants={imageVariants}
              className="flex justify-center"
            >
              <img
                src="/energizing-products.jpg"
                alt="Energizing Shampoo and Lotion"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Hairmedicine;