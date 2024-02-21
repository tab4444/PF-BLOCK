import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <>
      <NavBar/>
      <div className="flex flex-row gap-x-5 items-center justify-center capitalize font-montserrat font-medium text-sm p-2 bg-black border-b-8 border-green-500">
        <p className="cursor-pointer text-white hover:text-neutral-300">inicio</p>
        <p className="cursor-pointer text-white hover:text-neutral-300">tienda</p>
        <p className="cursor-pointer text-white hover:text-neutral-300">Componentes de PC</p>
        <p className="cursor-pointer text-white hover:text-neutral-300">Perifericos</p>
        <p className="cursor-pointer text-white hover:text-neutral-300">Monitores</p>
        <p className="cursor-pointer text-white hover:text-neutral-300">Notebooks</p>
      </div>
      <ItemListContainer saludo="a la mejor tienda de productos tecnologicos en Argentina"/>
      <Footer/>
      <ItemDetailContainer/>
    </>
  )
}
export default App
