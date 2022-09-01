
import { Container, Nav, Navbar } from 'react-bootstrap';

const CustomNavbar = ({ brand }) => (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pasta Restaurant - {brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ms-auto">
            <Nav.Link href="#menu">Menù</Nav.Link>
            <Nav.Link eventKey={2} href="#prenotazioni">
              Prenotazioni
            </Nav.Link>
            <Nav.Link href="#contatti">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
    )

export default CustomNavbar