import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import Certifications1 from '../components/LandingPages/landingcertification1';

function Certs() {
  return (
    <div className="App">
        <NavBar/>
        <Certifications1/>
      <Footer/>
    </div>
  );
}

export default Certs;