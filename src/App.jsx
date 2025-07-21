import logo from './logo.svg';
import './App.css';
import HomePage from './page/HomePage';
import HomeNavigation from './page/HomeNavigation';
import { Link, Routes, Route } from 'react-router-dom';
import gIcon from './Assets/gIcon.png';

const App = () => (
  <div className="App">
    <header className="navbar sticky-top navbar-light custom-bg-primary">
      <div className='navbar-brand'>
        <img src={gIcon} width="50" height="50" className='image' />
      </div>
      <ul className="navigation-bar">
        <li><Link className='navigation-link white custom-bg-secondary' to="/">HOME</Link></li>
        <li><Link className='navigation-link white custom-bg-secondary' to="/MYWORKS">MY WORKS</Link></li>
        <li><Link className='navigation-link white custom-bg-secondary' to="/PROFILE">PROFILE</Link></li>
      </ul>
    </header>
   <div>
     <Routes>
      <Route path="/" element={<HomeNavigation />} />
      <Route path="/MYWORKS" element={<HomePage />} />
      <Route path="/PROFILE" element={<p>PROFILE</p>} />
    </Routes>
   </div>
  </div>
);

// <Link className="navigation-link" to="/">HOME</Link>
export default App;
