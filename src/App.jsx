import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/partials/Navbar/Navbar";
import Home from "./Components/pages/home/Home";
import Contact from "./Components/pages/contact/Contact";
import Register from "./Components/pages/register/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
