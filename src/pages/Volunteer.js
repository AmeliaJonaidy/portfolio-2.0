import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import Volunteerp1 from '../components/LandingPages/volunteer';
function Volunteer() {
  return (
    <div className="App">
        <NavBar/>
        <Volunteerp1/>
      <Footer/>
    </div>
  );
}

export default Volunteer;