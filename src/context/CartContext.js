import  { createContext, useState, useEffect } from "react"


export const contexto = createContext()
const Provider = contexto.Provider

const CartContext = (prop) => {
  
  
const [carritoGlobal, setCarritoGlobal] = useState([] );
const [nuevoStock, setNuevoStock] = useState(prop.producto && prop.producto.stock !== undefined ? prop.producto.stock : 0);


useEffect(() => {
  if (prop.producto && prop.producto.stock !== undefined) {
    setNuevoStock(prop.producto.stock);
  }
}, [prop.producto]);

const calcularCantidadTotal = () => {
  const total = carritoGlobal.reduce((accumulator, producto) => {
    return accumulator + producto.cantidad;
  }, 0);

  console.log(total);
  return total;
};



const handleAgregar = (productToAdd, cantidad) => {
  const newObj = {
    ...productToAdd,
    cantidad
    
  }
  if(isInCart(newObj.id)){
// guardamos el valor del map en una variable
    const updatedCarrito = carritoGlobal.map(el => {
      if(el.id === newObj.id)  {
        el.cantidad += newObj.cantidad
      }
      console.log(el)
      return(el)
    })
// actualizamos el estado con este nuevo dato
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
  console.log(total);
  return total;
};




  return (
    <Provider value={{carritoGlobal, setCarritoGlobal, handleAgregar, handleEliminar,  calcularCantidadTotal, calcularMontoTotal}}>   
        {prop.children}
    </Provider>
    
  )
}

export default CartContext