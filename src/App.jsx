import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Error from "./components/Error";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

import { useState } from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import { getFirestore, doc, getDoc, collection, getDocs, query, where} from "firebase/firestore"
import { useEffect } from "react";

function App() {
  //coleccion
  /*
  const [products, setProducts] = useState([])
  useEffect(()=> {
    const db = getFirestore()
    const  itemsCollection = collection(db, "productos")
    getDocs(itemsCollection).then((snapshot) =>{
      setProducts(snapshot.docs.map((doc)=>(
        {id:doc.id,...doc.data()}
      )))
    })
  })
  */
  //coleccion filtrada
  /*
  const [productos, setProductos] = useState([])
  useEffect(()=>{
    const db = getFirestore()
    const q = query(
      collection(db,"productos"),
      where("categoria", "==", "monitor")
    )
    getDocs(q).then((snapshot)=>{

      if(snapshot.size === 0){
        console.log("No hay resultado")
      }
      setProductos(snapshot.docs.map((doc)=>(
        {id: doc.id,...doc.data()}
      )))
    })
  })
  */

  // documento
  /*
  const [product,setProduct] = useState(null);
  useEffect(()=> {
    const db = getFirestore();
    const productRef = doc(db, "productos", "0VvO8h4pTR38SFzSepYW")
    getDoc(productRef).then((snapshot) => {
      if(snapshot.exists){
        setProduct({id: snapshot.id, ...snapshot.data()})
      }
    })
  })*/

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="a la mejor tienda de productos tecnologicos en Argentina"/>}/>

            <Route path="/categoria/:categoryId" element={<ItemListContainer/>}/>

            <Route path="producto/:id" element={<ItemDetailContainer/>}/>

            <Route path="/carrito" element={<Cart/>}/>

            <Route path="*" element={<Error/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}
export default App
