import { useState } from "react"
import Button from 'react-bootstrap/Button';

function ItemCount({stock, initial, onAdd}) {

    let [contador, setContador] = useState(initial);

    const sumar = () => {
      if (contador < stock) {
        setContador(contador+1)
        console.log(contador); 
      }          
    }
    const restar = () => {
      if (contador > 0){
        setContador(contador-1)
        console.log(contador);
      }
    }
    const agregar = () => {
      if (contador > 0 ){
        onAdd = contador
        stock = stock - contador
        setContador(0);
        console.log(onAdd)
      }
    }  
  return (
    <div className="panel d-flex">
    <div className="botonera d-flex align-items-center justify-content-start">
    <Button variant="outline-dark" height="15" width="15" onClick={sumar}>+</Button>
    <p className="contador">Cantidad: {contador}</p>
    <Button variant="outline-dark" height="15" width="15" onClick={restar}>-</Button>
    </div>
    <div className="botonAgregar">
    <Button variant="primary"  onClick={agregar}>Agregar al carrito</Button> 
    </div>
    </div>
  );

}

export default ItemCount