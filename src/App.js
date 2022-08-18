import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavgiationBar from './screens/NavgiationBar';
import NotFound from './screens/NotFound';
import OurCompany from './screens/OurCompany';
import ScrollToTop from './utilis/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavgiationBar />
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
