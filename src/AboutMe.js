import logo from './logo.svg';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import LandingAbout from './components/landingabout';
import AboutCat from './components/aboutcat';


function AboutMe() {
  return (
    <div className="App">
        <NavBar/>
      <LandingAbout/>
      <div className='page-wrapper'>
        <AboutCat/>
      </div>
    </div>
  );
}

export default AboutMe;