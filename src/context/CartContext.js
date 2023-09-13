import  { createContext, useState, useEffect } from "react"
import ItemDetail from '../components/ItemDetail'
import { db } from "../base"
import { getDoc, doc , collection } from "firebase/firestore"

export const contexto = createContext()
const Provider = contexto.Provider

const CartContext = (prop) => {
  
  
const [carritoGlobal, setCarritoGlobal] = useState({ carrito: [] });
console.log(carritoGlobal)
const [cantidad, setCantidad] = useState(0)
const [nuevoStock, setNuevoStock] = useState(prop.producto && prop.producto.stock !== undefined ? prop.producto.stock : 0);


useEffect(() => {
  if (prop.producto && prop.producto.stock !== undefined) {
    setNuevoStock(prop.producto.stock);
  }
}, [prop.producto]);

const calcularCantidadTotal = () => {
  let total = 0;
  if (Array.isArray(carritoGlobal.carrito)) {
    for (const producto of carritoGlobal.carrito) {
      total += producto.cantidad;
      console.log(total)
    }
  } else {
    console.error("carritoGlobal.carrito no es un arreglo válido.");
  }

  return total;
};


const handleAgregar = (item, cantidad) => {
  setCarritoGlobal((prev) => {
    const productoEnCarrito = prev.carrito.find((producto) => producto.id === item.id);

    if (productoEnCarrito) {
      const nuevoCarrito = prev.carrito.map((producto) =>
        producto.id === item.id ? { ...producto, cantidad: producto.cantidad + cantidad } : producto
      );
      return { ...prev, carrito: nuevoCarrito };
    } else {
      return { ...prev, carrito: [...prev.carrito, { ...item, cantidad }] };
    }
  });
  
};

const handleEliminar = (productoId) => {
  setCarritoGlobal((prev) => {
    const nuevoCarrito = prev.carrito.filter((producto) => producto.id !== productoId);
  setCarritoGlobal(nuevoCarrito);
});
};

useEffect(() => {
  setCantidad(calcularCantidadTotal());
}, [carritoGlobal]);


  return (
    <Provider value={{carritoGlobal, setCarritoGlobal, handleAgregar, handleEliminar, cantidad, setCantidad}}>   
        {prop.children}
    </Provider>
    
  )
}

export default CartContext