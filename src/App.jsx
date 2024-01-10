import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Footer, Navbar } from './components';
import { About, Contact, Home, Projects } from './pages';
import FiraCode from './pages/FiraCode';

import('./models').then();

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/firacode' element={<FiraCode />} />
                  <Route path='/*' element={<div>page not found</div>} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
