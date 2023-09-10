import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Aboout";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Social />
      <Skills />
      <About />
      <Project />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
