import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Footer } from "../components/Layout/Footer";
import Activitiesp1 from '../components/LandingPages/activities';

function Activities() {
  return (
    <div className="App">
        <NavBar/>
        <Activitiesp1/>
      <Footer/>
    </div>
  );
}

export default Activities;