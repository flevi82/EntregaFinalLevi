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
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(datos => {if (links.id=== undefined) {
          const todos = datos.products.filter(producto => producto.category === "smartphones" || producto.category ==="laptops").map(producto => ({
            images: producto.images,
            title: producto.title,
            price: producto.price,
            id: producto.id
          }
          ))
          setData(todos)
        } else if(links.id==="1"){
          const celus = datos.products.filter(producto => producto.category === "smartphones").map(producto => ({
            images: producto.images,
            title: producto.title,
            price: producto.price,
            id: producto.id
          }
          ))
          setData(celus)
        }else if(links.id==="2"){
          const laptop = datos.products.filter(producto => producto.category === "laptops").map(producto => ({
            images: producto.images,
            title: producto.title,
            price: producto.price,
            id: producto.id
          }
          ))
          setData(laptop)
        }
      })
      }, 2000)
      }

  

    return (
      <Item data={data}/>
    )


}

export default ItemList
