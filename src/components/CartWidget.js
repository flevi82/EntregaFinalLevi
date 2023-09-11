import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from '../context/CartContext';

function CartWidget() {
  const numeroCarrito = useContext(contexto)
  console.log(numeroCarrito.numerosCarrito.cantidadTotal)

  return (
    <NavLink to="./carrito" className="carrito">
        <img src="/cartwhite.svg" alt="carrito" />
        <p>{numeroCarrito.numerosCarrito.cantidadTotal}</p>
    </NavLink> 
  )
}

export default CartWidget