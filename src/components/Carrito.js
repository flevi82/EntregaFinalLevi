import { contexto } from '../context/CartContext';
import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner';

function Carrito() {

    const {carritoGlobal, setCarritoGlobal} = useContext(contexto);
    console.log(carritoGlobal)


  return (
    <Container>
      <Row>
      {carritoGlobal.carrito.length===0 ? <Spinner />: carritoGlobal.carrito.map(cart=> (
        <Col key={cart.id} sm={6} xs={8} md={4} lg={12} id='tarjetas'>
        <Card className='h-100' id='tarjetaIndividual'>
          <Card.Img src={cart.image} className='producto-imagen' />
          <Card.Body>
            <Card.Title>{cart.title}</Card.Title>
            <Card.Text>Precio unitario: ${cart.price}</Card.Text>
            <Card.Text>Cantidad:{cart.cantidad}</Card.Text>
            <Card.Title>Subtotal: ${cart.price*cart.cantidad}</Card.Title>
          <Button variant="primary">Quitar del carrito</Button>
          </Card.Body>
        </Card>
      </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Carrito