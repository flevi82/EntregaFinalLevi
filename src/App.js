import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Main from './components/Main';
import CartContext from './context/CartContext'




function App() {


  
  return (
    <BrowserRouter>
      <CartContext >
        <NavBar/>
        <Main/>
     </CartContext>
      
    </BrowserRouter>
  );
}

export default App;
