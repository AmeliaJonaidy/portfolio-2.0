import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Volunteer from './Volunteer';
import Activities from './InterestGroup';
import Competitions from './Competition';
import Awards from './Awards';
import BeleafDesc from './components/beleaf';
import CareerDesc from './components/career';
import BotanyDesc from './components/botany';
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
          <Route path="/aboutme/awards" element={<Awards/>}/>
          <Route path="/myportfolio" element={<Portfolio/>}/>
          <Route path="/myportfolio/beleaf" element={<BeleafDesc/>}/>
          <Route path="/myportfolio/careerxplorer" element={<CareerDesc/>}/>
          <Route path="/myportfolio/botanybazaar" element={<BotanyDesc/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
