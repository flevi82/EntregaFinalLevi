import { contexto } from '../context/CartContext';
import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';

function Carrito() {
  const { carritoGlobal, handleEliminar } = useContext(contexto);



  if (!carritoGlobal.carrito) {
    // Si carritoGlobal.carrito no está definido, muestra un mensaje
    return <p>El carrito está vacío.</p>;
  }

  return (
    <Container>
      <Row>
        {carritoGlobal.carrito.length === 0 ? (
          <Spinner />
        ) : (
          carritoGlobal.carrito.map((producto) => (
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
                    onClick={() => handleEliminar(producto.id)} // Pasar el productoId al hacer clic en el botón
                  >
                    Quitar del carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Carrito;