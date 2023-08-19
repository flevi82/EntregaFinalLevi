import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';

function ItemDetail(prop) {

  

 
    return (
  <>
    <Container>
      <Row>
      {prop.producto.length===0 ? <p>"cargando..."</p> :
        <Col sm={6} xs={8} md={4} lg={6}>
          <Card className='h-100'>
            <Card.Img src={prop.producto.images[0]} className='producto-imagen' />
            <Card.Body>
            <Card.Title>{prop.producto.title}</Card.Title>
              <Card.Text>
                <p>{prop.producto.description}</p>
                <p>${prop.producto.price}</p>
                <p>stock: {prop.producto.stock}</p>
              </Card.Text>
              <ItemCount stock={prop.producto.stock} initial={0} onAdd/>
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