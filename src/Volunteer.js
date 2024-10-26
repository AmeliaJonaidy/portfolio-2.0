import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Volunteerp1 from './components/landingvolunteerp1';
import Volunteerp2 from './components/landingvolunteerp2';
import Volunteerp3 from './components/landingvolunteerp3';
import Volunteerp4 from './components/landingvolunteerp4';

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