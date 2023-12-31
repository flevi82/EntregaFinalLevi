
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import CartWidget from './CartWidget';




function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Navbar.Brand id='logo'>
          <NavLink  to='/' className="nav-link">
            <img
              src="/vandalay.svg"
              width="100"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" >
          <Nav className="mr-auto" id='links' >
            <NavLink  to='./categ/1' className="nav-link">
              Celulares
            </NavLink>
            <NavLink  to='./categ/2' className="nav-link">
              Laptop
            </NavLink>
            <NavLink  to='./carrito' className="nav-link">
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
  )
}

export default NavBar