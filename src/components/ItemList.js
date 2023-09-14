import { useEffect, useState } from "react"
import Item from "./Item";
import { useParams } from "react-router-dom";
import { db } from "../base"
import { getDocs , collection } from "firebase/firestore"


function ItemList() {

  const [data, setData] = useState([])
  const links = useParams()
  


  useEffect(()=>{
    getProducto();
  },[links.id])

  const getProducto = ()=>{
    


  const productosCollection = collection(db, "productos")

    const obtenerProductos = getDocs(productosCollection)

        obtenerProductos
            .then((resultado) => {
              const todos = resultado.docs.map((item)=>{
                const productos = item.data()
                productos.id = item.id
                return productos
              })
              if (links.id=== undefined) {
                setData(todos);
              } else if(links.id==="1"){
                  const celus = todos.filter(producto => producto.category === "smartphones").map(producto => ({
                    images: producto.images,
                    title: producto.title,
                    price: producto.price,
                    id: producto.id
                    }
                    ))
                  setData(celus)
              }else if(links.id==="2"){
                  const laptop = todos.filter(producto => producto.category === "laptops").map(producto => ({
                    images: producto.images,
                    title: producto.title,
                    price: producto.price,
                    id: producto.id
                    }
                    ))
                    setData(laptop)
                    }
            })
            .catch((error) => {
                console.log("Dio mal")
            })

          

      }


    return (
      <Item data={data}/>
    )


}

export default ItemList
