import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Course from "./Pages/Course";
import BeMember from "./Pages/BeMember";
import Faq from "./Pages/Faq";
import AboutUs from "./Pages/AboutUs";
import VerifyUser from "./Pages/VerifyUser";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/verify" element={<VerifyUser/>}/>
      </Routes>

      
      <div className="landing">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/bemember" element={<BeMember />} />
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      
      </div>
    </>
  );
}

export default App;
