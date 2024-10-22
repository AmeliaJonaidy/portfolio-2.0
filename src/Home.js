import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from './components/bannerintro';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from './components/bannerabout';
import { Portfolio } from './components/bannermyportfolio';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Portfolio />
      <Contact/>
      <Footer />
    </div>
  );
}

export default Home;
