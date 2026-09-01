import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import SpecificationsPage from './pages/SpecificationsPage';

import About from './sections/About';
import Features from './sections/Features';
import Applications from './sections/Applications';
import Gallery from './sections/Gallery';
import MixingInstructions from './sections/MixingInstructions';
import Contact from './sections/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/specifications" element={<SpecificationsPage />} />
          <Route path="/mixing" element={<MixingInstructions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
