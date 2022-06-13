import './App.css';
import Features from './Components/Features';
import Header from './Components/Header';
import Learn from './Components/Learn';
import Nav from './Components/Nav';
import Partners from './Components/Partners';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Why from './Components/Why';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init({duration: 1000});

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Features/>
      <Learn/>
      <Testimonials/>
      <Partners/>
      <Pricing/>
      <Why/>
    </div>
  );
}

export default App;
