import React, { useContext, useState } from 'react'
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'


const Checkout = () => {

    const { cart, totalCarrito, cantidadCarrito, vaciarCarrito } = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !email || !emailConfirmacion){
            setError("Completar todos los campos")
            return;
        }
        if(email !== emailConfirmacion){
            setError("Los email no coinciden")
            return;
        }

        const db = getFirestore();

        const orden = {
            producto: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.producto.map(async (productoOrden) => {
                const productoRef = doc(db, "producto", productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setError("")
                setOrdenId(docRef.id);
                vaciarCarrito()
            })
            .catch((err)=>{
                console.log(err);
                setError("Se produjo un error al generar la orden")
            })
        })
        .catch((error) => {
            console.log(error)
            setError("No se pudo actualizar el stock")
        })
    }

  return (
    <div>
        <h1>Ingresa tus datos</h1>

        <form onSubmit={manejadorFormulario}>
        {cart.map((producto) => (
            <div key={producto.producto.id}>
                <p>
                    {producto.producto.nombre} x {producto.cantidad}
                </p>
            <hr />
            </div>
        ))}
        <div>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name='nombre' onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="apellido">Apellido</label>
                <input type="text" name='apellido' onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="telefono">Telefono</label>
                <input type="tel" name='telefono' onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="emailConfirmacion">Email Confirmacion</label>
                <input type="email" name='emailConfirmacion' onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>

            {error && <p style={{color: "red"}}>{error}</p>}

            {ordenId && (
                <p>¡Gracias por tu compra! Tu número de orden es: {ordenId}</p>
            )}

            <button type="submit">Completar compra</button>
        </div>
    </form>
    </div>
  )
}

export default Checkout