import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from '../context/CartContext';

function CartWidget() {
  const { calcularCantidadTotal } = useContext(contexto);
  

  return (
    <NavLink to="./carrito" className="carrito">
        <img src="/cartwhite.svg" alt="carrito" />
        <p>{calcularCantidadTotal()}</p>
    </NavLink> 
  )
}

export default CartWidget