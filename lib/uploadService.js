import { db } from "../app/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import servicesData from "../data/serviceData.json";

// Függvény az adatok feltöltésére
export const uploadServices = async () => {
  try {
    const docRef = doc(db, "settings", "services");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      throw new Error("A szolgáltatások már inicializálva vannak!");
    }

    await setDoc(docRef, servicesData);
    return { success: true, message: "Szolgáltatások sikeresen feltöltve!" };
  } catch (error) {
    console.error("Hiba a szolgáltatások feltöltése során:", error);
    return { success: false, message: error.message || "Hiba történt a feltöltés során." };
  }
};