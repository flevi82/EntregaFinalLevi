import { useEffect, useState } from "react"
import Item from "./Item";
import { useParams } from "react-router-dom";


function ItemList() {

  const [data, setData] = useState([])
  const links = useParams()
  console.log(links.id)


  useEffect(()=>{
    getProducto();
  },[links.id])

  const getProducto = ()=>{
    
      setTimeout(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(datos => {if (links.id=== undefined) {
          setData(datos)
        } else if(links.id==="1"){
          const hombre = setData(datos.filter(producto => producto.category === "men's clothing").map(producto => ({
            image: producto.image,
            title: producto.title,
            price: producto.price,
            id: producto.id
          })));
        }else if(links.id==="2"){
          const mujer = setData(datos.filter(producto => producto.category === "women's clothing").map(producto => ({
            image: producto.image,
            title: producto.title,
            price: producto.price,
            id: producto.id
          })));
        }else if(links.id==="3"){
          const joyas = setData(datos.filter(producto => producto.category === "jewelery").map(producto => ({
            image: producto.image,
            title: producto.title,
            price: producto.price,
            id: producto.id
          })));
        }else if(links.id==="4"){
          const electronica = setData(datos.filter(producto => producto.category === "electronics").map(producto => ({
            image: producto.image,
            title: producto.title,
            price: producto.price,
            id: producto.id
          })));
        }
      })
      }, 2000)
      }

  

    return (
      <Item data={data}/>
    )


}

export default ItemList
