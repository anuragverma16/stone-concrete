import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import ScrollToTop from './ScrollToTop';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Layout() {
  useScrollReveal();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
