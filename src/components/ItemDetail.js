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
              <Col sm={6} xs={8} md={4} lg={6}>
                <Card className='h-100'>
                  <Card.Img src={prop.producto.image} className='producto-imagen' />
                  <Card.Body>
                    <Card.Title>{prop.producto.title}</Card.Title>
                    <Card.Text>
                      <p>{prop.producto.description}</p>
                      <p>${prop.producto.price}</p>
                  </Card.Text>
                  <ItemCount stock={5} initial={0} onAdd/>
                  </Card.Body>
                </Card>
              </Col>
             </Row>
          </Container>
</>
  )
}

export default ItemDetail