import "bootstrap/dist/css/bootstrap.min.css";
import 'tailwindcss/tailwind.css';

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import {HowItWorks} from './components/howItWorks'
import {WhyChooseTemplate} from './components/chooseTemplate'
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HowItWorks />
      <WhyChooseTemplate />
    </div>
  );
}

export default App;
