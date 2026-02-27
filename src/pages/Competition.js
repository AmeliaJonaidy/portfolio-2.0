import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import Compp1 from '../components/LandingPages/competition';

function Competitions() {
  return (
    <div className="App">
        <NavBar/>
        <Compp1/>
      <Footer/>
    </div>
  );
}

export default Competitions;