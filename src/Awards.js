import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import AwardsP1 from './components/landingawards';

function Awards() {
  return (
    <div className="App">
        <NavBar/>
      <div className='page-wrapper'>
        <AwardsP1/>
      </div>
      <Footer/>
    </div>
  );
}

export default Awards;