import { useParams, useNavigate  } from 'react-router-dom';
import { contexto } from '../context/CartContext';
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { collection, addDoc, serverTimestamp,  doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from "../base"



function Checkout() {

    const navigate = useNavigate();
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

        const combinedData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          fecha: serverTimestamp(),
          items: carritoGlobal,
        };

        carritoGlobal.forEach(async (item) => {
          const productDocRef = doc(db, 'productos', item.id);
          const productDoc = await getDoc(productDocRef);
        
          if (productDoc.exists()) {
            const productData = productDoc.data();
            const newStock = productData.stock - item.cantidad;
        
            if (newStock >= 0) {
              // Actualiza el stock en Firestore
              await updateDoc(productDocRef, { stock: newStock });
            } else {
              // Maneja el caso en el que el stock es insuficiente
              console.error(`Stock insuficiente para el producto con ID ${item.id}`);
            }
          } else {
            // Maneja el caso en el que el producto no existe
            console.error(`El producto con ID ${item.id} no existe`);
          }
        });

        const pedidosCollection = collection(db, "pedidos");
        addDoc(pedidosCollection, combinedData)
        .then((resultado)=> {
          console.log("Se guardo la venta");
          setCarritoGlobal([])
          navigate('/final/'+ resultado.id); 
        })  
  }
      setValidated(true);
    };

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
    <Button type="submit">Confirmar compra</Button>
    </Row>
  </Form>

);

}

export default Checkout