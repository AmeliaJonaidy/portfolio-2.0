import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import PortfolioLand from './components/portfoliolanding';
import { Footer } from "./components/Footer";


function Portfolio() {
  return (
    <div className="App">
        <NavBar/>
        <div className='page-wrapper'>
        <PortfolioLand/>
      </div>
      <Footer/>
    </div>
  );
}

export default Portfolio;