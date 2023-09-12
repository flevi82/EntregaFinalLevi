import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"



function Main() {
  return (
    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categ/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/categ/:id/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/carrito" element={<Carrito/>} />
    </Routes>
  )
}

export default Main