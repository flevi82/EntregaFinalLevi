import { createContext, useState } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CartContext = (props) => {
  const valores = {
    carrito: [],
    montoTotal : 0,
    cantidadTotal : 5 
  }
  
const [carritoGlobal, setCarritoGlobal] = useState(valores)


  return (
    <Provider value={{carritoGlobal, setCarritoGlobal}}>   
        {props.children}
    </Provider>
    
  )
}

export default CartContext