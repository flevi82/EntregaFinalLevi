import ItemDetail from './ItemDetail';
import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom";
import { db } from "../base"
import { getDoc, doc , collection } from "firebase/firestore"
import CartContext from '../context/CartContext';

function ItemDetailContainer() {

  const [producto, setProducto] = useState({})
  const links = useParams()
  const dinam = links.id

  useEffect(()=>{
    get1Producto();
  },[])

  const get1Producto = ()=>{
     
    const productosCollection = collection(db, "productos")
    const refProd = doc(productosCollection,dinam)
    const obtener1Producto = getDoc(refProd)
      
    obtener1Producto
      .then((resultado) => {
        const productoData = resultado.data();
        if (productoData) {
        const productoConId = { id: dinam, ...productoData };
        setProducto(productoConId);
        }
        })
      .catch((error) => {
        console.log("Dio mal")
      })
    }

  return (
    <>
      <ItemDetail producto={producto}/>
      <CartContext producto={producto}/>
   </>
  )
}
export default ItemDetailContainer