import ItemDetail from './ItemDetail';
import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

  const [producto, setProducto] = useState([])
  const links = useParams()
  console.log(links.id)



  useEffect(()=>{
    get1Producto();
  },[links])

  const get1Producto = ()=>{

    setTimeout(()=>{
     
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(datos =>   
        setProducto(datos.find(producto => producto.id === parseInt(links.id,10)))
    )
        console.log(producto)

    }, 2000)
    }


  return (
  <>
   <ItemDetail producto={producto}/>
  </>
  )
}

export default ItemDetailContainer