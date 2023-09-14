import { useParams  } from 'react-router-dom';
import { contexto } from '../context/CartContext';
import { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../base"



function Checkout() {

    
    const [carritoFinal, setCarritoFinal] = useState({});
    const [token, setToken] = useState("")
    const { carritoGlobal, setCarritoGlobal } = useContext(contexto)
    const { montoTotal } = useParams();
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
    });
      
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        // Form is valid, combine form data with carritoGlobal
        const combinedData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          fecha: serverTimestamp(),
          items: carritoGlobal,
        };
        
        setCarritoFinal(combinedData);
        console.log(carritoFinal)
  }
      setValidated(true);
    };

    useEffect(() => {
        const pedidosCollection = collection(db, "pedidos");
        const pedido = addDoc(pedidosCollection, carritoFinal);
        pedido
          .then((resultado) => {
            console.log("Se guardo la venta");
            console.log(resultado);
            setToken(resultado.id);
          })
          .catch((error) => {
            console.log(error);
            console.log("Dio mal");
          }); 
    }, [validated, carritoFinal]);

    useEffect(() => {
      setCarritoGlobal([]); 
      console.log(carritoFinal)
    }, []);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    

return( 
    <Form noValidate validated={validated} onSubmit={handleSubmit} id='checkout'>
    <h2 className='textoCentrado'>Completá tus datos</h2>
    <Row className="mb-3" >
      <Form.Group as={Col}  controlId="validationCustom01">
        <Form.Label>First name</Form.Label>
        <Form.Control
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          type="text"
          placeholder="First name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom02">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          type="text"
          placeholder="Last name"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col}  controlId="validationCustomEmail">
        <Form.Label>Email</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingresá un Email válido
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
    <h3 className='textoCentrado'>Total de tu compra: ${montoTotal}</h3>
    <Row className="mb-3">
    <Link to="/final"><Button type="submit">Submit form</Button></Link>
    </Row>
  </Form>

);

}

export default Checkout