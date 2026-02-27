import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Volunteer from './pages/Volunteer';
import Activities from './pages/InterestGroup';
import Competitions from './pages/Competition';
import Certs from './pages/Certification';
import Awards from './pages/Awards';
import Internship from './pages/Internship';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/aboutme/volunteer" element={<Volunteer />} />
          <Route path="/aboutme/activities" element={<Activities/>}/>
          <Route path="/aboutme/competitions" element={<Competitions/>}/>
          <Route path="/aboutme/internship" element={<Internship/>}/>
          <Route path="/aboutme/certifications" element={<Certs/>}/>
          <Route path="/aboutme/awards" element={<Awards/>}/>
          <Route path="/myportfolio" element={<Portfolio/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
