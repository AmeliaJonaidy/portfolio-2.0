import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Volunteer from './Volunteer';
import Activities from './InterestGroup';
import Competitions from './Competition';
import Certs from './Certification';
import Awards from './Awards';
import BeleafDesc from './components/beleaf';
import CareerDesc from './components/career';
import BotanyDesc from './components/botany';
import LostResearcher from './components/lostresearcher';
import StickerCard from './components/stickercard';
import BookList from './components/booklist';
import Focuscrew from './components/focuscrew';
import Journal from './components/journalapp';
import StyleShop from './components/styleshop';
import TravelList from './components/travellist';
import Disney from './components/disney';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Book } from 'react-bootstrap-icons';

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
          <Route path="/aboutme/certifications" element={<Certs/>}/>
          <Route path="/aboutme/awards" element={<Awards/>}/>
          <Route path="/myportfolio" element={<Portfolio/>}/>
          <Route path="/myportfolio/beleaf" element={<BeleafDesc/>}/>
          <Route path="/myportfolio/careerxplorer" element={<CareerDesc/>}/>
          <Route path="/myportfolio/botanybazaar" element={<BotanyDesc/>}/>
          <Route path="/myportfolio/lostresearcher" element={<LostResearcher/>}/>
          <Route path="/myportfolio/stickernamecard" element={<StickerCard/>}/>
          <Route path="/myportfolio/booklistapp" element={<BookList/>}/>
          <Route path="/myportfolio/journalapp" element={<Journal/>}/>
          <Route path="/myportfolio/travelapp" element={<TravelList/>}/>
          <Route path="/myportfolio/focuscrew" element={<Focuscrew/>}/>
          <Route path="/myportfolio/styleshop" element={<StyleShop/>}/>
          <Route path="/myportfolio/disney" element={<Disney/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
