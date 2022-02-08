import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ScrollToTop from './Components/ScrollToTop';

function App() {
     return (
          <div className="container-fluid ">
               <Navbar />
               <Hero />
               <About />
               <Projects />
               <Contact />
               <ScrollToTop />
          </div>
     );
}

export default App;
