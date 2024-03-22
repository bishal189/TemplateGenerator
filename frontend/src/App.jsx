import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./components/Signin/Signin";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home /> */}
      <Signin/>
    </div>
  );
}


export default App;
