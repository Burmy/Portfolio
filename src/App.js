import { useState, useEffect } from "react";
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import BounceLoader from "react-spinners/BounceLoader";
import './App.css';

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2300)
  }, []
  )
  return (
    <div>
      {
        loading ?
          <div class="loading">

            <BounceLoader
              color={"#5641EA"}
              loading={loading}
              size={100}
            />
            <div className="wave">👋</div>
          </div>

          :
          <div>
            <Navbar />
            <Fade>
              <Header />
              <About />
            </Fade>
            <Projects />
            <Footer />
          </div>
      }
    </div >
  );
}

export default App;