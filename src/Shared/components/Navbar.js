import {Container, Navbar, Nav} from 'react-bootstrap';

import './Navbar.css';

const NavbarBitlearners = () => {
    return <Navbar bg="danger" expand="lg" sticky="top">
    <Container fluid>
      <Navbar.Brand href="/" className="text-light">BitLearners</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse >
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link href="/discussion" className="text-light">Discussion</Nav.Link>
          <Nav.Link href="/courses" className="text-light">Courses</Nav.Link>
          <Nav.Link href="/competitions" className="text-light">Competitions</Nav.Link>
          <Nav.Link href="/leaderboard" className="text-light">Leaderboard</Nav.Link>
          <Nav.Link href="/interview-preparations" className="text-light">Interview Preparations</Nav.Link>
        </Nav>
        <hr className="separator"></hr>
        <Nav.Link href="/login" className="text-light">Login</Nav.Link>
        <Nav.Link href="/signup" className="text-light">Sign Up</Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavbarBitlearners;