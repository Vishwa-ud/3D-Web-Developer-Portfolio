import { BrowserRouter } from 'react-router-dom';

import {Home, About, Contact, Experience, Feedbacks, Hero, Navbar, Tech , Works, StarsCanvas, Footer} from './components';

const App = () => {
  return (
    <BrowserRouter>
   <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Home />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer />

      </div>
   </div>
   </BrowserRouter>
  )
}

export default App
