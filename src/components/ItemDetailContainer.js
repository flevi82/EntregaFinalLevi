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
     
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(datos => {if (true){
          const filtroId = datos.products.filter(productor => productor.id === parseInt(links.id,10)).map(productor => ({
            images: productor.images,
            title: productor.title,
            price: productor.price,
            description: productor.description,
            id: productor.id,
            stock: productor.stock
          }
          ))
        setProducto(filtroId[0])
        }}
        )
    }, 2000)    
    }

  return (
   <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer