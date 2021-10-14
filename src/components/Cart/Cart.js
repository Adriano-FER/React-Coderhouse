const productos = [
    {id:0, name:"joystick", price: 150, stock: 5},
    {id:1, name:"Silla", price: 300, stock: 2},
    {id:2, name:"teclado", price: 200, stock: 10}
]

const task = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(product), 3000

    })
})

.fetch(task)
.then((request) => {console.log(request)})

const Producto = ({name, price}) =>{
    return (
        <div>
        <h1>{name}</h1>
        <h2>Precio: {price}</h2>
        </div>
    )
}

export default function App2(){
    const [productos, setProductos] = useState(data);
    return {
 
    }


}