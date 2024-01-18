import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer"
import About from "./Pages/About";

function App() {
  return (
    <>
     
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>        
        </Routes>
        <div className="landing">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer />
   
        </div>
    </>
  );
}

export default App;
