import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {

 const pageStyle = {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    minHeight: "calc(100vh - 60px)",
  };

  return (
    <Router>
      <Navbar />
      <div style={pageStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App
