import "./styles/App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Main/Hero";
import About from "./components/Main/Aboout";
import Project from "./components/Main/Project";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";
import Social from "./components/Main/Social";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Social />
      <About />
      <Project />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
