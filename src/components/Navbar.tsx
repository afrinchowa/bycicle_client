const Navbar = () =>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Bicycle Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/all-bicycles">All Bicycles</Link>
              <Link className="nav-link" to="/about">About Us</Link>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};
export default Navbar;