import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SideBar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
