
import {collection, query, getDocs, addDoc,  } from 'firebase/firestore'

import { db } from "../firebase/config"

const SendOrder = async (values, cart, total, orderDate) => {
    try {
    const docRef = await addDoc(collection(db, "Collection"),{
        buyer: JSON.stringify({values}),
        items: JSON.stringify(cart),
        total: JSON.stringify(total),
        date: orderDate
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
    getData(db);
}
  

    async function getData(db) {
        const q = query(collection(db, "orders"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.data());
        });
      }
   



export default SendOrder