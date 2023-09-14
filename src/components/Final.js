import { useParams } from 'react-router-dom';

function Final() {

  const {token} = useParams()
    

  return (
   <p>{token}</p>
  )
}

export default Final