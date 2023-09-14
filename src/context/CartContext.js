import  { createContext, useState, useEffect } from "react"
import ItemDetail from '../components/ItemDetail'
import { db } from "../base"
import { getDoc, doc , collection } from "firebase/firestore"

export const contexto = createContext()
const Provider = contexto.Provider

const CartContext = (prop) => {
  
  
const [carritoGlobal, setCarritoGlobal] = useState([] );
console.log(carritoGlobal)
const [cantidad, setCantidad] = useState(0)
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
    carritoGlobal.map(el => {
        if(el.id === newObj.id)  {
          el.cantidad += newObj.cantidad
        }
        console.log(el)
        return(el)
        })

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


useEffect(() => {
  setCantidad(calcularCantidadTotal());
}, [carritoGlobal]);


  return (
    <Provider value={{carritoGlobal, setCarritoGlobal, handleAgregar, handleEliminar, cantidad, setCantidad, calcularCantidadTotal, calcularMontoTotal}}>   
        {prop.children}
    </Provider>
    
  )
}

export default CartContext