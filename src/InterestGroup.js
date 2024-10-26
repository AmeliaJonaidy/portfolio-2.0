import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Activitiesp1 from './components/landingigp1';
import Activitiesp2 from './components/landingigp2';

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