import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Main/Hero";
import Skills from "./components/Main/Skills";
import Project from "./components/Main/Project";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";
import Social from "./components/Helper/Social";
import BackToTop from "./components/Helper/BackToTop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <BackToTop />
        <Social />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
