
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "./App.css";
import Home from "./pages/Home";
import Templating from "./pages/Templating";
import Signin from "./components/Signin/Signin";
import Register from "./components/SignUp/Register";
import TemplatePage from "./components/Template/TemplatePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Payment from "./components/Payment/Payment";
=======


>>>>>>> 47c995e9ee10f4215e28cde664d120f0532ed744
import Navbar  from "./components/Template/Navbar";
import New from "./components/Template/New";



function App() {
  return (
    <>

      {
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/templates" element={<Templating />} />
            
            <Route path="/pages" element={<TemplatePage />} />
            <Route path="/navbar" element={<Navbar />} />
<<<<<<< HEAD
            <Route path="/payment" element={<Payment/>} />
=======
            <Route path="/new" element={<New />} />
>>>>>>> 47c995e9ee10f4215e28cde664d120f0532ed744
            
            
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
