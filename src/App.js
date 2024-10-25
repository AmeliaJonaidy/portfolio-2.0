import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Volunteer from './components/landingvolunteer';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/aboutme/volunteer" element={<Volunteer />} />
          <Route path="/myportfolio" element={<Portfolio/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
