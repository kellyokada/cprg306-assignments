import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
   
    const itemsCollection = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsCollection);

 
    const queryItems = itemsSnapshot.docs.map((itemDoc) => ({
      id: itemDoc.id,
      ...itemDoc.data(),
    }));
    return queryItems;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error; 
  }
};

export const addItem = async (userId, item) => {
  try {
  
    const itemsCollection = collection(db, "users", userId, "items");
    const addedDoc = await addDoc(itemsCollection, item);
    return addedDoc.id; 
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};
