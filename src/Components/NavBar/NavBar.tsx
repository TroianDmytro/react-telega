import { FC } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import "./NavBar.css"
// import { NavBarWrapper } from './NavBar.styled';


const NavBar: FC = () => (
     <Navbar expand="lg" className=" nav-bar-bg-color"  >
      <Container style={{width:"90rem"}}>
        <Navbar.Brand href="/home" style={{fontSize:"xx-large"}}>Admin Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Дать доступ</Nav.Link>
            <Nav.Link href="/table">Таблица</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);

export default NavBar;
