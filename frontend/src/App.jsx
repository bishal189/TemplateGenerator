import "bootstrap/dist/css/bootstrap.min.css";
import 'tailwindcss/tailwind.css';
import Footer from './components/Footer';
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./components/Signin/Signin";
import Register from "./components/SignUp/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
       <>

      { <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </Router>  }
    </>


  );
}


export default App;
