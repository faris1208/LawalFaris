import './App.css';
import '../src/Styles/portfolio.css';
import Portfolio from './Components/Portfolio';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Components/Contact';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Portfolio />
        <Contact />
    </div>
    </BrowserRouter>
  );
}

export default App;
