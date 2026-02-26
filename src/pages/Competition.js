import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import Compp1 from '../components/LandingPages/landingcompp1';
import Compp2 from '../components/LandingPages/landingcompp2';
import Compp3 from '../components/LandingPages/landingcompp3';

function Competitions() {
  return (
    <div className="App">
        <NavBar/>
      <div className='page-wrapper'>
        <Compp1/>
        <Compp2/>
        <Compp3/>
      </div>
      <Footer/>
    </div>
  );
}

export default Competitions;