import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import Volunteerp1 from '../components/LandingPages/landingvolunteerp1';
import Volunteerp2 from '../components/LandingPages/landingvolunteerp2';
import Volunteerp3 from '../components/LandingPages/landingvolunteerp3';
import Volunteerp4 from '../components/LandingPages/landingvolunteerp4';

function Volunteer() {
  return (
    <div className="App">
        <NavBar/>
      <div className='page-wrapper'>
        <Volunteerp1/>
        <Volunteerp2/>
        <Volunteerp3/>
        <Volunteerp4/>
      </div>
      <Footer/>
    </div>
  );
}

export default Volunteer;