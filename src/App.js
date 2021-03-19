
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Fade>
        <Header />
        <About />
      </Fade>
      <Projects />
      <Footer />

    </div>
  );
}

export default App;