import { NavLink } from "react-router-dom"

function CartWidget() {
  return (
    <NavLink to="./carrito" className="carrito">
        <img src="/cartwhite.svg" alt="carrito" />
        <p>1</p>
    </NavLink> 
  )
}

export default CartWidget