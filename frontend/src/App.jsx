import "bootstrap/dist/css/bootstrap.min.css";
import 'tailwindcss/tailwind.css';

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
