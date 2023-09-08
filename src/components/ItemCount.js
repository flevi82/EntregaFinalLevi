
import Button from 'react-bootstrap/Button';


function ItemCount({handleRestar, handleSumar, handleAgregar, cantidad}) {
 
  return (
    <div className="panel d-flex">
    <div className="botonera d-flex align-items-center justify-content-start">
    <Button variant="outline-dark" height="15" width="15" onClick={handleRestar}>-</Button>
    <p className="contador">Cantidad: {cantidad}</p>
    <Button variant="outline-dark" height="15" width="15" onClick={handleSumar}>+</Button>
    </div>
    <div className="botonAgregar">
    <Button variant="primary"  onClick={handleAgregar}>Agregar al carrito</Button> 
    </div>
    </div>
  );

}

export default ItemCount