import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Certifications1 from './components/landingcertification1';

function Certs() {
  return (
    <div className="App">
        <NavBar/>
      <div className='page-wrapper'>
        <Certifications1/>
      </div>
      <Footer/>
    </div>
  );
}

export default Certs;