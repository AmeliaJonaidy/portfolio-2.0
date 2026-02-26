import logo from '../logo.svg';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import LandingAbout from '../components/LandingPages/landingabout';
import AboutCat from '../components/Common/aboutcat';


function AboutMe() {
  return (
    <div className="App">
        <NavBar/>
      <LandingAbout/>
      <div className='page-wrapper'>
        <AboutCat/>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutMe;