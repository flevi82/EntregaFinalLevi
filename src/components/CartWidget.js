import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from '../context/CartContext';

function CartWidget() {
  const numeroCarrito = useContext(contexto)
  console.log(numeroCarrito.carritoGlobal.cantidadTotal)

  return (
    <NavLink to="./carrito" className="carrito">
        <img src="/cartwhite.svg" alt="carrito" />
        <p>{numeroCarrito.carritoGlobal.cantidadTotal}</p>
    </NavLink> 
  )
}

export default CartWidget