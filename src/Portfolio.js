import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import PortfolioLand from './components/portfoliolanding';



function Portfolio() {
  return (
    <div className="App">
        <NavBar/>
        <div className='page-wrapper'>
        <PortfolioLand/>
      </div>
    </div>
  );
}

export default Portfolio;