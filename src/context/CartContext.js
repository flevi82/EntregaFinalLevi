import  { createContext, useState } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CartContext = (props) => {
  const contenidoCarrito = {
    carrito: []
  }

  const numerosCarrito = {
    montoTotal : 0,
    cantidadTotal : 5 
  }
  
const [carritoGlobal, setCarritoGlobal] = useState(contenidoCarrito)
console.log(carritoGlobal)


  return (
    <Provider value={{carritoGlobal, setCarritoGlobal, numerosCarrito}}>   
        {props.children}
    </Provider>
    
  )
}

export default CartContext