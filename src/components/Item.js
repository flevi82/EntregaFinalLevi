import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';



function Item(prop) {

  return (
    <>
    <Container>
      <Row>
        {prop.data.length===0 ? <p>"cargando..."</p> : prop.data.map(item=> (  
              <Col sm={6} xs={8} md={4} lg={6} id='tarjetas'>
                <Card className='h-100' id='tarjetaIndividual'>
                  <Card.Img src={item.images[0]} className='producto-imagen' />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                  <Link to={'./item/'+ item.id}><Button variant="primary">Más información</Button></Link>
                  </Card.Body>
                </Card>
              </Col>
              ))}
             </Row>
          </Container>
</>
);}

export default Item