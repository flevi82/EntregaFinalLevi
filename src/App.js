import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Main from './components/Main';
import { useState } from 'react';
import { CartContext } from './context/CartContext';



function App() {

  const [carrito, setCarrito] = useState([])


  return (
    <CartContext.Provider value={{carrito, setCarrito}}>
      <BrowserRouter>
        <NavBar/>
        <Main/>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
