import { Route, Routes } from "react-router-dom";
import "./App.css";
// import ScrollToTop from "./components/ScrollToTop";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Course from "./Pages/Course";
import BeMember from "./Pages/BeMember";
import Faq from "./Pages/Faq";
import AboutUs from "./Pages/AboutUs";
import VerifyUser from "./Pages/VerifyUser";
import ScrollToTop from "./Components/ScrollToTop";
import ForgetPassword from "./Pages/Forget";
import ResetPassword from "./Pages/ResetPassword";
import Partnership from "./Pages/Partnership";
import Leadership from "./Pages/Leadership";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/auth/confirm" element={<VerifyUser/>}/>
        <Route path="/auth/reset" element={<ResetPassword/>}/>
      </Routes>

      
      <div className="landing">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/bemember" element={<BeMember />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      
      </div>
    </>
  );
}

export default App;
