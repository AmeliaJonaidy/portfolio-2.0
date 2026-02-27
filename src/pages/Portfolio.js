import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import PortfolioLand from '../components/Common/portfoliolanding';
import { Footer } from "../components/Layout/Footer";


function Portfolio() {
  return (
    <div className="App">
        <NavBar/>
        <PortfolioLand/>
      <Footer/>
    </div>
  );
}

export default Portfolio;