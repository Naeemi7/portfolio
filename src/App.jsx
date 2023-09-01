import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Aboout";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
