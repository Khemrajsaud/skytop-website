import "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Blog from "./Pages/Blog";

import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Program from "./Pages/Program";

const App = () => {
  return (
    <div>
        <Navbar/>
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blog />} />

        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Program />} />
      </Routes>
      <Footer />
    
    </div>
  );
};

export default App;
