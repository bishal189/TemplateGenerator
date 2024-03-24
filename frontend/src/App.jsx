import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "./App.css";
import Home from "./pages/Home";
import Templating from "./pages/Templating";
import Signin from "./components/Signin/Signin";
import Register from "./components/SignUp/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  FirstPage  from "../src/components/template/FirstPage";

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
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
