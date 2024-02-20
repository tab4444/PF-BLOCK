import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar/>
      <div className="flex flex-row gap-x-5 items-center justify-center capitalize font-montserrat font-medium text-sm text-white p-2 bg-black border-b-8 border-green-500">
        <p className="cursor-pointer">inicio</p>
        <p className="cursor-pointer">tienda</p>
        <p className="cursor-pointer">contacto</p>
      </div>
      <ItemListContainer saludo="a la mejor tienda de productos tecnologicos en Argentina"/>
      <Footer/>
    </>
  )
}
export default App
