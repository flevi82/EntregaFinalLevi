import  { createContext, useState } from "react"


export const contexto = createContext()
const Provider = contexto.Provider

const CartContext = (prop) => {
  
  
const [carritoGlobal, setCarritoGlobal] = useState([] );


const calcularCantidadTotal = () => {
  const total = carritoGlobal.reduce((accumulator, producto) => {
    return accumulator + producto.cantidad;
  }, 0);

  return total;
};



const handleAgregar = (productToAdd, cantidad) => {
  const newObj = {
    ...productToAdd,
    cantidad
    
  }
  if(isInCart(newObj.id)){

    const updatedCarrito = carritoGlobal.map(el => {
      if(el.id === newObj.id)  {
        el.cantidad += newObj.cantidad
      }
      console.log(el)
      return(el)
    })

    setCarritoGlobal(updatedCarrito);

  }else {
    setCarritoGlobal([...carritoGlobal, newObj])
    
  }
  
}
  const isInCart = (id) => {
    return carritoGlobal.some(el => el.id === id)
  }
const handleEliminar = (productoId) => {
  const nuevoCarrito = carritoGlobal.filter((producto) => producto.id !== productoId);
  console.log(`eliminaste el id ${productoId}`)
  setCarritoGlobal([...nuevoCarrito]);
};

const calcularMontoTotal = () => {
  const total = carritoGlobal.reduce((accumulator, producto) => {
    return accumulator + (producto.cantidad*producto.price);
  }, 0);
  return total;
};




  return (
    <Provider value={{carritoGlobal, setCarritoGlobal, handleAgregar, handleEliminar,  calcularCantidadTotal, calcularMontoTotal}}>   
        {prop.children}
    </Provider>
    
  )
}

export default CartContext