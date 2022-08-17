import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NotFound from './screens/NotFound';
import OurCompany from './screens/OurCompany';

function App() {
  return (
    <BrowserRouter>
      <header></header>
      <main>
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
