import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import PortfolioLand from '../components/Common/portfoliolanding';
import { Footer } from "../components/Layout/Footer";


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