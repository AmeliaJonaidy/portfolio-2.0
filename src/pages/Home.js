import logo from '../logo.svg';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/Layout/NavBar";
import { Banner } from '../components/Banners/bannerintro';
import { Contact } from "../components/Common/Contact";
import { Footer } from "../components/Layout/Footer";
import { About } from '../components/Banners/bannerabout';
import { Portfolio } from '../components/Banners/bannermyportfolio';

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
