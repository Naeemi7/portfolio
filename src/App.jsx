import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Aboout";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Social />
      {/*    <About /> */}
      <Project />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
