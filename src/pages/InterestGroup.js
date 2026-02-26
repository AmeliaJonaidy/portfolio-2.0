import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import Activitiesp1 from '../components/LandingPages/landingigp1';
import Activitiesp2 from '../components/LandingPages/landingigp2';

function Activities() {
  return (
    <div className="App">
        <NavBar/>
      <div className='page-wrapper'>
        <Activitiesp1/>
        <Activitiesp2/>
      </div>
      <Footer/>
    </div>
  );
}

export default Activities;