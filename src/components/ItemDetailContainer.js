import ItemDetail from './ItemDetail';
import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom";
import { db } from "../base"
import { getDoc, doc , collection } from "firebase/firestore"

function ItemDetailContainer() {

  const [producto, setProducto] = useState([])
  const links = useParams()
  const dinam = links.id

  useEffect(()=>{
    get1Producto();
  },[links])

  const get1Producto = ()=>{

    setTimeout(()=>{
     
      const productosCollection = collection(db, "productos")
      const refProd = doc(productosCollection,dinam)
      const obtener1Producto = getDoc(refProd)
      
        obtener1Producto
            .then((resultado) =>{
              setProducto(resultado.data())
            })

            .catch((error) => {
              console.log("Dio mal")
          })

    }, 2000)    
    }

  return (
   <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer