import "bootstrap/dist/css/bootstrap.min.css";
import 'tailwindcss/tailwind.css';
import Footer from './components/Footer';
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./components/Signin/Signin";
import Register from "./components/SignUp/Register";


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Signin/> */}
      <Register/>
      
      <Header/>
      <Home />
  
      <Footer />

    </div>
  );
}


export default App;
