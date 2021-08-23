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
    </div>
  );
}

export default App;
