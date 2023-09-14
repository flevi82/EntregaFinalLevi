import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Final() {

  const {token} = useParams()
    

  return (
    <div className='cuadro'>
      <h2>Tu pedido se procesó correctamente.</h2>
      <h3>Tu código de pedido es: {token}</h3>
      <Link to={'/'}><Button variant="primary" className='volver'>Seguir comprando</Button></Link>
   </div>
  )
}

export default Final