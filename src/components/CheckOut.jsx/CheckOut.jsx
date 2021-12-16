import { useState } from "react";
import { useProvider } from '../../contexts/ApiContext.js';
import BuyerForm from "./Form";
import SendOrder from "./SendOrder"

const CheckOut = () => {
    const cart = useProvider()
    const product = cart.currentCart
    let value = 0;
    let amount = 0;
    let total = 0;
    if (!product === []) {
    value = product.reduce((a, b) => a.value + b.value)
    amount = product.reduce((a, b) => a.amount + b.amount)
    total = value * amount
}
    console.log(value, amount)
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const date = new Date();
    const orderDate = date.toString()


    const handleSubmit = async (e) => {
        e.preventDefault()
       SendOrder(buyer, product, total, orderDate) 
    }

return (
<div>
    <form onSubmit={handleSubmit}>
       <label>Inserta aquí tu nombre y apellido</label> 
        <BuyerForm setBuyer={setBuyer} name="name" buyer={buyer}/>
        <label>Inserta tu Email</label> 
        <BuyerForm setBuyer={setBuyer} name="email" buyer={buyer}/>
        <label>Inserta tu número de telefono</label> 
        <BuyerForm setBuyer={setBuyer} name="phone" buyer={buyer}/>
        <button type="submit">
            Finalizar Compra
        </button>
    </form>
</div>
)

}

export default CheckOut