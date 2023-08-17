import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"



function Main() {
  return (
    <Routes>
        <Route path="/" element={<ItemListContainer nombre="Fernando"/>} />
        <Route path="/categ/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/categ/:id/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/carrito" element={<p> Carrito</p>} />
    </Routes>
  )
}

export default Main