import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "./App.css";
import Home from "./pages/Home";
import Templating from "./pages/Templating";
import Signin from "./components/Signin/Signin";
import Register from "./components/SignUp/Register";
import TemplatePage from "./components/Template/TemplatePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "../src/components/Template/FirstPage";
import Navbar  from "./components/Template/Navbar";

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
            <Route path="/firstpage" element={<FirstPage />} />
            <Route path="/pages" element={<TemplatePage />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
