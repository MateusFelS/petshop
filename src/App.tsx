import Footer from "./components/Footer";
import Slidenav from "./components/SlideNavbar";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

export function App() {
  return (
      <>
        <Slidenav />
        <Main/>
        <Products />
        <Services />
        <AboutUs />
        <Footer />
      </>
  );
}

