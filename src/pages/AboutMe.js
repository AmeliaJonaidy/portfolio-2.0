import logo from '../logo.svg';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import AboutCat from '../components/Common/aboutcat';


function AboutMe() {
  return (
    <div className="App">
        <NavBar/>
        <AboutCat/>
      <Footer/>
    </div>
  );
}

export default AboutMe;