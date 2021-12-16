import { ref, update } from 'firebase/database'
import { writeBatch, collection, query, where, documentId, getDocs, addDoc, Timestamp } from 'firebase/firestore/lite'

import { db } from "../firebase/config"

const SendOrder = async (values, cart, total, orderDate) => {

    const orden = {
        buyer: JSON.stringify({values}),
        items: JSON.stringify(cart),
        total: JSON.stringify(total),
        date: orderDate
    }
console.log(orden)

    const ordersRef = ref(db, "orders")
    ordersRef.child("orders").update(orden)

    return true
}


export default SendOrder