import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NotFound from './screens/NotFound';
import OurCompany from './screens/OurCompany';
import ScrollToTop from './utilis/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: '#f9f9f9' }}
          variant="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Nav>
                <LinkContainer className="my-link" to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
