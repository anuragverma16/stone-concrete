import './styles.css';
import useScrollReveal from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

import Hero from './sections/Hero';
import About from './sections/About';
import BenefitsStrip from './sections/BenefitsStrip';
import Features from './sections/Features';
import Applications from './sections/Applications';
import Gallery from './sections/Gallery';
import Specifications from './sections/Specifications';
import MixingInstructions from './sections/MixingInstructions';
import Precautions from './sections/Precautions';
import BrandStatement from './sections/BrandStatement';
import Contact from './sections/Contact';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BenefitsStrip />
        <Features />
        <Applications />
        <Gallery />
        <Specifications />
        <MixingInstructions />
        <Precautions />
        <BrandStatement />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
