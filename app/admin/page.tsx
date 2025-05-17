"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// A hét napjainak sorrendje
const daysOrder = [
  "Hétfő",
  "Kedd",
  "Szerda",
  "Csütörtök",
  "Péntek",
  "Szombat",
  "Vasárnap",
];

// TypeScript interfészek
interface ServiceItem {
  name: string;
  price: number;
  time: string;
  material: string;
  rag: string;
}

interface ServicesData {
  no: {
    rovid: ServiceItem[];
    felhoszu: ServiceItem[];
    hosszu: ServiceItem[];
  };
  ferfi: ServiceItem[];
  gyerek: ServiceItem[];
}

interface EditingService {
  category: "no" | "ferfi" | "gyerek";
  length: "rovid" | "felhoszu" | "hosszu" | null;
  index: number;
  service: ServiceItem;
}

interface Schedule {
  [day: string]: string;
}

interface Contact {
  phone: string;
  email: string;
  facebook: string;
  mapEmbed: string;
}

const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [servicesData, setServicesData] = useState<ServicesData | null>(null);
  const [schedule, setSchedule] = useState<Schedule>({});
  const [contact, setContact] = useState<Contact>({
    phone: "",
    email: "",
    facebook: "",
    mapEmbed: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<
    "no" | "ferfi" | "gyerek"
  >("no");
  const [selectedLength, setSelectedLength] = useState<
    "rovid" | "felhoszu" | "hosszu"
  >("rovid");
  const [editingService, setEditingService] = useState<EditingService | null>(
    null
  );
  const [addingService, setAddingService] = useState(false);

  // Felhasználó állapot figyelése
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser?.email === "gipszjakab@gmail.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Szolgáltatások, nyitvatartás és kapcsolat lekérése Firestore-ból, csak admin esetén
  useEffect(() => {
    if (!isAdmin) return;

    const fetchSettings = async () => {
      try {
        const docRef = doc(db, "settings", "general");
        const servicesDocRef = doc(db, "settings", "services");
        const [docSnap, servicesDocSnap] = await Promise.all([
          getDoc(docRef),
          getDoc(servicesDocRef),
        ]);

        // Szolgáltatások
        if (servicesDocSnap.exists()) {
          setServicesData(servicesDocSnap.data() as ServicesData);
        } else {
          setServicesData(null);
        }

        // Nyitvatartás és kapcsolat
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSchedule(data.schedule || {});
          setContact(
            data.contact || { phone: "", email: "", facebook: "", mapEmbed: "" }
          );
        } else {
          setSchedule({});
          setContact({ phone: "", email: "", facebook: "", mapEmbed: "" });
        }
      } catch (err) {
        console.error("Hiba a beállítások lekérdezése során:", err);
      }
    };
    fetchSettings();
  }, [isAdmin]);

  // Bejelentkezés kezelése
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUser(user);
      if (user.email !== "gipszjakab@gmail.com") {
        alert("Nincs admin jogosultságod.");
        await signOut(auth);
        setUser(null);
      }
    } catch (error) {
      console.error("Hiba a bejelentkezés során:", error);
      alert("Hibás email vagy jelszó.");
    }
  };

  // Kijelentkezés kezelése
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setIsAdmin(false);
    setServicesData(null);
    setSchedule({});
    setContact({ phone: "", email: "", facebook: "", mapEmbed: "" });
  };

  // Nyitvatartás mentése
  const saveSchedule = async () => {
    try {
      const docRef = doc(db, "settings", "general");
      await setDoc(docRef, { schedule }, { merge: true });
      alert("Nyitvatartás sikeresen mentve!");
    } catch (error) {
      console.error("Hiba a nyitvatartás mentése során:", error);
      alert("Hiba történt a mentés során.");
    }
  };

  // Kapcsolat mentése
  const saveContact = async () => {
    try {
      const docRef = doc(db, "settings", "general");
      await setDoc(docRef, { contact }, { merge: true });
      alert("Kapcsolat információk sikeresen mentve!");
    } catch (error) {
      console.error("Hiba a kapcsolat mentése során:", error);
      alert("Hiba történt a mentés során.");
    }
  };

  // Szolgáltatás frissítése
  const updateService = async (
    category: "no" | "ferfi" | "gyerek",
    length: "rovid" | "felhoszu" | "hosszu" | null,
    index: number,
    updatedService: ServiceItem
  ) => {
    if (!servicesData) return;
    const updatedServices: ServicesData = { ...servicesData };
    if (category === "no" && length) {
      updatedServices.no[length][index] = updatedService;
    } else if (category !== "no") {
      updatedServices[category][index] = updatedService;
    }
    try {
      const docRef = doc(db, "settings", "services");
      await setDoc(docRef, updatedServices);
      setServicesData(updatedServices);
      setEditingService(null);
    } catch (error) {
      console.error("Hiba a szolgáltatás frissítése során:", error);
      alert("Hiba történt a szolgáltatás frissítése során.");
    }
  };

  // Szolgáltatás törlése
  const deleteService = async (
    category: "no" | "ferfi" | "gyerek",
    length: "rovid" | "felhoszu" | "hosszu" | null,
    index: number
  ) => {
    if (!servicesData) return;
    const updatedServices: ServicesData = { ...servicesData };
    if (category === "no" && length) {
      updatedServices.no[length].splice(index, 1);
    } else if (category !== "no") {
      updatedServices[category].splice(index, 1);
    }
    try {
      const docRef = doc(db, "settings", "services");
      await setDoc(docRef, updatedServices);
      setServicesData(updatedServices);
    } catch (error) {
      console.error("Hiba a szolgáltatás törlése során:", error);
      alert("Hiba történt a szolgáltatás törlése során.");
    }
  };

  // Új szolgáltatás hozzáadása
  const addService = async (
    category: "no" | "ferfi" | "gyerek",
    length: "rovid" | "felhoszu" | "hosszu" | null,
    newService: ServiceItem
  ) => {
    if (!servicesData) return;
    const updatedServices: ServicesData = { ...servicesData };
    if (category === "no" && length) {
      updatedServices.no[length].push(newService);
    } else if (category !== "no") {
      updatedServices[category].push(newService);
    }
    try {
      const docRef = doc(db, "settings", "services");
      await setDoc(docRef, updatedServices);
      setServicesData(updatedServices);
      setAddingService(false);
    } catch (error) {
      console.error("Hiba az új szolgáltatás hozzáadása során:", error);
      alert("Hiba történt az új szolgáltatás hozzáadása során.");
    }
  };

  // Csak a bejelentkező űrlap jelenik meg, ha nincs bejelentkezve
  if (!user) {
    return (
      <div className="bg-gradient-to-t from-[#9f8e53] to-[#54402f] min-h-screen pb-4 pt-0 lg:pt-16 flex items-center justify-center">
        <div className="w-full max-w-sm mx-auto bg-white bg-opacity-20 p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg sm:text-xl text-white mb-4 text-center">
            Bejelentkezés
          </h2>
          <form onSubmit={handleLogin}>
            <label className="block mt-2 text-white text-sm sm:text-base">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
              />
            </label>
            <label className="block mt-2 text-white text-sm sm:text-base">
              Jelszó:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
              />
            </label>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full text-sm sm:text-base"
            >
              Bejelentkezés
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Ha nem admin, csak hibaüzenet
  if (!isAdmin) {
    return (
      <div className="bg-gradient-to-t from-[#9f8e53] to-[#54402f] min-h-screen pb-4 pt-0 lg:pt-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-base sm:text-lg">
            Nincs admin jogosultságod.
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded text-sm sm:text-base"
          >
            Kijelentkezés
          </button>
        </div>
      </div>
    );
  }

  // Admin panel tartalma
  const allServices: { label: string; services: ServiceItem[] }[] =
    selectedCategory === "no"
      ? [
          {
            label: selectedLength,
            services: servicesData?.no[selectedLength] || [],
          },
        ]
      : selectedCategory === "ferfi"
      ? [{ label: "Férfi hajvágás", services: servicesData?.ferfi || [] }]
      : [{ label: "Gyermek hajvágás", services: servicesData?.gyerek || [] }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="bg-gradient-to-t from-[#9f8e53] to-[#54402f] min-h-screen pb-4 pt-7 lg:pt-16">
      <div className="grid p-2 sm:p-4 md:p-6 h-auto w-full scroll-mt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl justify-self-center my-6 sm:my-8 text-white bg-white/10 rounded-lg p-4 sm:p-5">
          Admin Panel
        </h1>

        {/* Admin tartalom, csak ha van servicesData */}
        {servicesData && (
          <>
            {/* Kijelentkezés gomb */}
            <div className="flex justify-center mb-4">
              <button
                onClick={handleLogout}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded text-sm sm:text-base"
              >
                Kijelentkezés
              </button>
            </div>

            {/* Felső gombok */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 mt-6 sm:mt-8">
              <button
                onClick={() => {
                  setSelectedCategory("no");
                  setSelectedLength("rovid");
                }}
                className={`relative px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg font-semibold text-white border border-[#8d7341] rounded-md transition-all duration-300 ease-in-out ${
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
                className={`relative px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg font-semibold text-white border border-[#8d7341] rounded-md transition-all duration-300 ease-in-out ${
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
                className={`relative px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg font-semibold text-white border border-[#8d7341] rounded-md transition-all duration-300 ease-in-out ${
                  selectedCategory === "gyerek"
                    ? "bg-[#8d7341] bg-opacity-30"
                    : "bg-transparent hover:bg-[#8d7341] hover:bg-opacity-20"
                }`}
              >
                Gyermek
              </button>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {allServices.map(({ label, services }, groupIndex) => (
                <div key={groupIndex}>
                  {/* Kategóriaválasztó gombok vagy címke */}
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    {selectedCategory === "no" ? (
                      <div className="flex justify-center gap-2 sm:gap-4 md:gap-6">
                        <button
                          onClick={() => setSelectedLength("rovid")}
                          className={`relative px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg font-medium text-white transition-all duration-200 ease-in-out ${
                            selectedLength === "rovid"
                              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8d7341]"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        >
                          Rövid
                        </button>
                        <button
                          onClick={() => setSelectedLength("felhoszu")}
                          className={`relative px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg font-medium text-white transition-all duration-200 ease-in-out ${
                            selectedLength === "felhoszu"
                              ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8d7341]"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        >
                          Félhosszú
                        </button>
                        <button
                          onClick={() => setSelectedLength("hosszu")}
                          className={`relative px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg font-medium text-white transition-all duration-200 ease-in-out ${
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
                        <span className="relative px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base md:text-lg font-medium text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#8d7341]">
                          {label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Új szolgáltatás gomb */}
                  <div className="flex justify-center mb-4">
                    <button
                      onClick={() => setAddingService(true)}
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-green-500 text-white rounded text-sm sm:text-base"
                    >
                      Új szolgáltatás hozzáadása
                    </button>
                  </div>

                  {/* Új szolgáltatás űrlap a kategóriaválasztó alatt */}
                  <AnimatePresence>
                    {addingService && (
                      <motion.div
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full max-w-sm mx-auto p-4 sm:p-6 bg-white bg-opacity-40 rounded-xl shadow-lg mb-4 sm:mb-6"
                      >
                        <h2 className="text-base sm:text-xl text-white mb-4">
                          Új szolgáltatás hozzáadása
                        </h2>
                        <form
                          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const newService: ServiceItem = {
                              name: (
                                form.elements.namedItem(
                                  "name"
                                ) as HTMLInputElement
                              ).value,
                              price: parseInt(
                                (
                                  form.elements.namedItem(
                                    "price"
                                  ) as HTMLInputElement
                                ).value
                              ),
                              time: (
                                form.elements.namedItem(
                                  "time"
                                ) as HTMLInputElement
                              ).value,
                              material: (
                                form.elements.namedItem(
                                  "material"
                                ) as HTMLInputElement
                              ).value,
                              rag: (
                                form.elements.namedItem(
                                  "rag"
                                ) as HTMLInputElement
                              ).value,
                            };
                            addService(
                              selectedCategory,
                              selectedCategory === "no" ? selectedLength : null,
                              newService
                            );
                          }}
                        >
                          <label className="block mt-2 text-white text-sm sm:text-base">
                            Név:
                            <input
                              type="text"
                              name="name"
                              className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                            />
                          </label>
                          <label className="block mt-2 text-white text-sm sm:text-base">
                            Ár:
                            <input
                              type="number"
                              name="price"
                              className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                            />
                          </label>
                          <label className="block mt-2 text-white text-sm sm:text-base">
                            Időtartam:
                            <input
                              type="text"
                              name="time"
                              className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                            />
                          </label>
                          <label className="block mt-2 text-white text-sm sm:text-base">
                            Ár alatti szöveg:
                            <input
                              type="text"
                              name="material"
                              className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                            />
                          </label>
                          <label className="block mt-2 text-white text-sm sm:text-base">
                            Ár melletti szöveg:
                            <input
                              type="text"
                              name="rag"
                              className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                            />
                          </label>
                          <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <button
                              type="submit"
                              className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm sm:text-base"
                            >
                              Hozzáadás
                            </button>
                            <button
                              type="button"
                              onClick={() => setAddingService(false)}
                              className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm sm:text-base"
                            >
                              Mégse
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Szolgáltatások listája */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedCategory}-${selectedLength}`}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-2 sm:space-y-3 md:space-y-4"
                    >
                      {services.map((service, index) => (
                        <motion.div
                          key={`${selectedCategory}-${selectedLength}-${service.name}-${index}`}
                          variants={serviceVariants}
                          className="w-full max-w-[1020px] mx-auto"
                        >
                          <AnimatePresence mode="popLayout">
                            {editingService?.index === index &&
                            editingService?.category === selectedCategory &&
                            (editingService?.length === selectedLength ||
                              selectedCategory !== "no") ? (
                              <motion.div
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-full max-w-md mx-auto p-4 sm:p-6 bg-white bg-opacity-40 rounded-xl shadow-lg"
                              >
                                <h2 className="text-base sm:text-xl text-white mb-4">
                                  Szolgáltatás szerkesztése
                                </h2>
                                <form
                                  onSubmit={(
                                    e: React.FormEvent<HTMLFormElement>
                                  ) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const updatedService: ServiceItem = {
                                      name: (
                                        form.elements.namedItem(
                                          "name"
                                        ) as HTMLInputElement
                                      ).value,
                                      price: parseInt(
                                        (
                                          form.elements.namedItem(
                                            "price"
                                          ) as HTMLInputElement
                                        ).value
                                      ),
                                      time: (
                                        form.elements.namedItem(
                                          "time"
                                        ) as HTMLInputElement
                                      ).value,
                                      material: (
                                        form.elements.namedItem(
                                          "material"
                                        ) as HTMLInputElement
                                      ).value,
                                      rag: (
                                        form.elements.namedItem(
                                          "rag"
                                        ) as HTMLInputElement
                                      ).value,
                                    };
                                    updateService(
                                      editingService.category,
                                      editingService.length,
                                      editingService.index,
                                      updatedService
                                    );
                                  }}
                                >
                                  <label className="block mt-2 text-white text-sm sm:text-base">
                                    Név:
                                    <input
                                      type="text"
                                      name="name"
                                      defaultValue={editingService.service.name}
                                      className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                                    />
                                  </label>
                                  <label className="block mt-2 text-white text-sm sm:text-base">
                                    Ár:
                                    <input
                                      type="number"
                                      name="price"
                                      defaultValue={
                                        editingService.service.price
                                      }
                                      className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                                    />
                                  </label>
                                  <label className="block mt-2 text-white text-sm sm:text-base">
                                    Időtartam:
                                    <input
                                      type="text"
                                      name="time"
                                      defaultValue={editingService.service.time}
                                      className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                                    />
                                  </label>
                                  <label className="block mt-2 text-white text-sm sm:text-base">
                                    Ár alatti szöveg:
                                    <input
                                      type="text"
                                      name="material"
                                      defaultValue={
                                        editingService.service.material
                                      }
                                      className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                                    />
                                  </label>
                                  <label className="block mt-2 text-white text-sm sm:text-base">
                                    Ár melletti szöveg:
                                    <input
                                      type="text"
                                      name="rag"
                                      defaultValue={editingService.service.rag}
                                      className="mt-1 p-2 rounded w-full text-black text-sm sm:text-base"
                                    />
                                  </label>
                                  <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <button
                                      type="submit"
                                      className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base"
                                    >
                                      Mentés
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => setEditingService(null)}
                                      className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm sm:text-base"
                                    >
                                      Mégse
                                    </button>
                                  </div>
                                </form>
                              </motion.div>
                            ) : (
                              <motion.div
                                variants={serviceVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border border-gray-300 rounded-lg bg-white bg-opacity-10 shadow-md text-white mx-2 sm:mx-0"
                              >
                                <div className="flex-1 mb-2 sm:mb-0">
                                  <p className="text-sm sm:text-base md:text-lg font-medium break-words">
                                    {service.name}
                                  </p>
                                  <p className="text-xs sm:text-sm opacity-80">
                                    {service.time}
                                  </p>
                                </div>
                                <div className="flex-1 sm:flex-none text-left sm:text-right mb-2 sm:mb-0">
                                  <p className="text-sm sm:text-base md:text-lg font-medium break-words">
                                    {formatPrice(service.price)} Ft{" "}
                                    {service.rag}
                                  </p>
                                  <p className="text-xs sm:text-sm opacity-80 break-words">
                                    {service.material}
                                  </p>
                                </div>
                                <div className="flex gap-2 sm:ml-4">
                                  <button
                                    onClick={() =>
                                      setEditingService({
                                        category: selectedCategory,
                                        length:
                                          selectedCategory === "no"
                                            ? selectedLength
                                            : null,
                                        index,
                                        service,
                                      })
                                    }
                                    className="px-2 sm:px-3 py-1 sm:py-2 bg-yellow-500 text-white rounded text-xs sm:text-sm"
                                  >
                                    Szerkesztés
                                  </button>
                                  <button
                                    onClick={() =>
                                      deleteService(
                                        selectedCategory,
                                        selectedCategory === "no"
                                          ? selectedLength
                                          : null,
                                        index
                                      )
                                    }
                                    className="px-2 sm:px-3 py-1 sm:py-2 bg-red-500 text-white rounded text-xs sm:text-sm"
                                  >
                                    Törlés
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-7 gap-x-7">
              {/* Nyitvatartás szerkesztése */}
              <div className="w-full max-w-md p-4 bg-white bg-opacity-40 rounded-xl shadow-lg mb-6">
                <h2 className="text-xl text-white mb-4">
                  Nyitvatartás szerkesztése
                </h2>
                {daysOrder.map((day) => (
                  <div key={day} className="mb-2">
                    <label className="block text-white text-sm">{day}</label>
                    <input
                      type="text"
                      value={schedule[day] || ""}
                      onChange={(e) =>
                        setSchedule((prev) => ({
                          ...prev,
                          [day]: e.target.value,
                        }))
                      }
                      className="mt-1 p-2 rounded w-full text-black text-sm"
                    />
                  </div>
                ))}
                <button
                  onClick={saveSchedule}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full text-sm"
                >
                  Mentés
                </button>
              </div>

              {/* Kapcsolat szerkesztése */}
              <div className="w-full max-w-md p-4 bg-white bg-opacity-40 rounded-xl shadow-lg mb-6">
                <h2 className="text-xl text-white mb-4">
                  Kapcsolat szerkesztése
                </h2>
                <label className="block text-white text-sm">Telefonszám</label>
                <input
                  type="text"
                  value={contact.phone}
                  onChange={(e) =>
                    setContact((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="mt-1 p-2 rounded w-full text-black text-sm"
                />
                <label className="block mt-2 text-white text-sm">Email</label>
                <input
                  type="text"
                  value={contact.email}
                  onChange={(e) =>
                    setContact((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="mt-1 p-2 rounded w-full text-black text-sm"
                />
                <label className="block mt-2 text-white text-sm">
                  Facebook link
                </label>
                <input
                  type="text"
                  value={contact.facebook}
                  onChange={(e) =>
                    setContact((prev) => ({
                      ...prev,
                      facebook: e.target.value,
                    }))
                  }
                  className="mt-1 p-2 rounded w-full text-black text-sm"
                />
                <label className="block mt-2 text-white text-sm">
                  Térkép embed URL
                </label>
                <input
                  type="text"
                  value={contact.mapEmbed}
                  onChange={(e) =>
                    setContact((prev) => ({
                      ...prev,
                      mapEmbed: e.target.value,
                    }))
                  }
                  className="mt-1 p-2 rounded w-full text-black text-sm"
                />
                <button
                  onClick={saveContact}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full text-sm"
                >
                  Mentés
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
