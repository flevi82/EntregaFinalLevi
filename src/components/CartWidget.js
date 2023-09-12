import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from '../context/CartContext';

function CartWidget() {
  const { cantidad } = useContext(contexto);
  console.log(cantidad)

  return (
    <NavLink to="./carrito" className="carrito">
        <img src="/cartwhite.svg" alt="carrito" />
        <p>{cantidad}</p>
    </NavLink> 
  )
}

export default CartWidget