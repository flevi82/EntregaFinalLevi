import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';
import Spinner from './Spinner';
import { useContext, useState } from 'react';
import { contexto } from '../context/CartContext';



function ItemDetail(prop) {
  console.log(prop)
  const {handleAgregar} = useContext(contexto);
  const [cantidad, setCantidad] = useState(1)
 


  const item = {
    id: prop.producto.id,
    title: prop.producto.title,
    stock: prop.producto.stock,
    price: prop.producto.price,
  };

  const agregarAlCarrito = () => {
    // Llama a handleAgregar solo cuando el usuario haga clic en el botón de agregar al carrito
    handleAgregar(item, cantidad);
  };


  const handleRestar = () =>{
    cantidad > 1 && setCantidad (cantidad -1)

  }

  const handleSumar = () => {
    cantidad < prop.producto.stock && setCantidad (cantidad +1)
  }
  
 
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
                <p>stock: {prop.producto.stock}</p>
              </Card.Text>
              <ItemCount 
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={agregarAlCarrito}/>
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