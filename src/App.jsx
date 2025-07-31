import './App.css';
import HomePage from './page/HomePage';
import HomeNavigation from './page/HomeNavigation';
import PastWorks from './page/PastWorks';
import { Link, Routes, Route } from 'react-router-dom';
import gIcon from './Assets/gIcon.png';

const App = () => {
  return ( <div className="App">
    <header className="navbar sticky-top navbar-light custom-bg-primary">
      <div className='navbar-brand'>
        <img src={gIcon} width="50" height="50" className='image' />
      </div>
      <ul className="navigation-bar">
        <li><Link className='navigation-link white custom-bg-secondary' to="/">HOME</Link></li>
        <li><Link className='navigation-link white custom-bg-secondary' to="/pastProject">PAST PROJECTS</Link></li>
        <li><Link className='navigation-link white custom-bg-secondary' to="/myWorks">MY WORKS</Link></li>
        <li><Link className='navigation-link white custom-bg-secondary' to="/profile">PROFILE</Link></li>
      </ul>
    </header>
   <div>
     <Routes>
      <Route path="/" element={<HomeNavigation />} />
      <Route path="/pastProject" element={<PastWorks/>} />
      <Route path="/myWorks" element={<HomePage />} />
      <Route path="/profile" element={
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src="/semua.html"
            title="External HTML"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      } />
    </Routes>
   </div>
  </div>)
};

// <Link className="navigation-link" to="/">HOME</Link>
export default App;
