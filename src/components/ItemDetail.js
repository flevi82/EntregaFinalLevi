import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';
import Spinner from './Spinner';
import { useContext, useState, useEffect} from 'react';
import { contexto } from '../context/CartContext';


function ItemDetail(prop) {
  const { carritoGlobal, setCarritoGlobal } = useContext(contexto);
  const [cantidad, setCantidad] = useState(1)
  const [nuevoStock, setNuevoStock] = useState(null)

  useEffect(() => {

    if (prop.producto) {
      setNuevoStock(prop.producto.stock);
    }
  }, [prop.producto.stock]);


  const handleRestar = () =>{
    cantidad > 1 && setCantidad (cantidad -1)

  }

  const handleSumar = () => {
    cantidad < prop.producto.stock && setCantidad (cantidad +1)
  }


  const handleAgregar = () => {
    const itemAgregado = { ...prop.producto, cantidad };

    // const buscarEnCarrito = carritoGlobal.carrito.find((producto)=>producto.id === productoAgregado.id)
   
    // if (buscarEnCarrito){
    //   console.log("está en el carrito")
    //   productoAgregado[buscarEnCarrito].cantidad += cantidad;
    // }else{
    //   console.log("no está en el carrito")
    //   productoAgregado.push({ ...prop.producto, cantidad })

    // }

    setCarritoGlobal([...carritoGlobal,itemAgregado])



  
  
    // const productoEnCarritoIndex = nuevoCarrito.findIndex(item => item.id === prop.producto.id);

  // if (productoEnCarritoIndex !== -1) {
  //   // Si el producto ya está en el carrito, actualiza su cantidad
  //   nuevoCarrito[productoEnCarritoIndex].cantidad += cantidad;
  // } else {
  //   // Si el producto no está en el carrito, agrégalo al carrito
  //   nuevoCarrito.push({ ...prop.producto, cantidad });
  // }

  // setCarritoGlobal(nuevoCarrito);
  
  };

  useEffect(() => {
    // Este efecto se ejecutará cada vez que carritoGlobal se actualice
    console.log("Carrito actualizado:", carritoGlobal);
  }, [carritoGlobal]);
  
 
    return (
  <>
    <Container>
      <Row>
      {prop.producto.length===0 ? <Spinner /> :
        <Col sm={6} xs={8} md={4} lg={6}>
          <Card className='h-100'>
            <Card.Img src={prop.producto.images} className='producto-imagen' />
            <Card.Body>
            <Card.Title>{prop.producto.title}</Card.Title>
              <Card.Text>
                <p>{prop.producto.description}</p>
                <p>${prop.producto.price}</p>
                <p>stock: {nuevoStock}</p>
              </Card.Text>
              <ItemCount 
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={handleAgregar}/>
            </Card.Body>
          </Card>
        </Col>
        }
      </Row>
    </Container>
  </>
  )
}

export default ItemDetail