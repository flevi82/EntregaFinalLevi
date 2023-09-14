import { contexto } from '../context/CartContext';
import { useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Carrito() {
  const { carritoGlobal, handleEliminar, calcularMontoTotal } = useContext(contexto);


  if (!carritoGlobal) {
    return (
      <div className='cuadro'>
      <h2>El carrito está vacío.</h2>
      <Link to={'/'}><Button variant="primary" className='volver'>Seguir comprando</Button></Link>
      </div>
    )
    
  }

  const montoTotal = calcularMontoTotal();

  return (
  <div>
    <Container>
      <Row>
      {carritoGlobal.length === 0 ? (
          <div className='cuadro'>
          <h2>El carrito está vacío.</h2>
          <Link to={'/'}><Button variant="primary" className='volver'>Seguir comprando</Button></Link>
          </div>
        ) : (
          carritoGlobal.map((producto) => (
            <Col key={producto.id} sm={6} xs={8} md={4} lg={12} id='tarjetas'>
              <Card className='h-100' id='tarjetaIndividual'>
                <Card.Img src={producto.image} className='producto-imagen' />
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text>Precio unitario: ${producto.price}</Card.Text>
                  <Card.Text>Cantidad: {producto.cantidad}</Card.Text>
                  <Card.Title>Subtotal: ${producto.price * producto.cantidad}</Card.Title>
                  <Button
                    variant='primary'
                    onClick={() => handleEliminar(producto.id)}>Quitar del carrito</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <Row>
      {carritoGlobal.length === 0 ? null :  
      <>
        <Link to={`/checkout/${montoTotal}`}><Button variant='primary'>Confirmar compra</Button></Link>
        <h3>Total pedido: ${montoTotal}</h3> 
      </>
    }
    </Row>
  </Container>
</div>
    
  );
}

export default Carrito;