import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
      {/*   <Project /> */}
      <Footer />
    </>
  );
}

export default App;
