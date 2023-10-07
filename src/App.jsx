import "./styles/App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Main/Hero";
import Skills from "./components/Main/Skills";
import Project from "./components/Main/Project";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";
import Social from "./components/Helper/Social";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Social />
      <Skills />

      {/*    <Project /> */}
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
