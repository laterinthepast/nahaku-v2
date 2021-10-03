import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
/* import Testimonials from "./components/Testimonials"; */
/* import SideBar from "./components/Sidebar"; */




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      {/* <Testimonials/> */}
      <About />
      
      <Footer />
    </>
  );
}

export default App;
