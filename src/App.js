import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
     return (
          <div className="container-fluid ">
               <Navbar />
               <Hero />
               <About />
               <Projects />
          </div>
     );
}

export default App;
