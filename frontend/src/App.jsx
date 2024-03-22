import "bootstrap/dist/css/bootstrap.min.css";
import 'tailwindcss/tailwind.css';

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import {HowItWorks} from './components/howItWorks'
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HowItWorks />
    </div>
  );
}

export default App;
