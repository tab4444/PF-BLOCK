import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Error from "./components/Error";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
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
