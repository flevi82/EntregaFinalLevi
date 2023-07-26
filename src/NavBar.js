import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" id='logo'>
            <img
              src="/logoblanco.svg"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#home">Consultorio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Hogar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Niños</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Adultos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <CartWidget />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar