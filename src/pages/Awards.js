import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import AwardsP1 from '../components/LandingPages/landingawards';

function Awards() {
  return (
    <div className="App">
        <NavBar/>
      <div className='page-wrapper'>
        <AwardsP1/>
      </div>
      <Footer/>
    </div>
  );
}

export default Awards;