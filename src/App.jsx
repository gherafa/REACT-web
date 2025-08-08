import './App.css';
import HomePage from './page/HomePage';
import HomeNavigation from './page/HomeNavigation';
import PastWorks from './page/PastWorks';
import { Link, Routes, Route } from 'react-router-dom';
import gIcon from './Assets/gIcon.png';
import React from 'react';
import AppStyle from './App.styles';
import NavbarPopup from './component/navbar/NavbarPopup';

const App = () => {
  const [onHover, setOnHover] = React.useState(false);
  const [hoveredContent, setHoveredContent] = React.useState('');

  return ( <div className="App">
    <header className="custom-navbar sticky-top">
      <ul className="navigation-bar">
        <img src={gIcon} width="50" height="50" className='image'/>
        <li>
          <Link className='navigation-link white custom-bg-secondary'
            to="/"
            onMouseEnter={() => {setOnHover(true); setHoveredContent('HOME')}}
            onMouseLeave={() => setOnHover(false)}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link className='navigation-link white custom-bg-secondary'
            to="/pastProject"
            onMouseEnter={() => {setOnHover(true); setHoveredContent('PAST_PROJECTS')}}
            onMouseLeave={() => setOnHover(false)}
          >
            PAST PROJECTS
          </Link>
        </li>
         <li>
          <Link className='navigation-link white custom-bg-secondary'
            to="/myWorks"
            onMouseEnter={() => {setOnHover(true); setHoveredContent('MY_WORKS')}}
            onMouseLeave={() => setOnHover(false)}
          >
            TRANSFER SIMULATION
          </Link>
        </li>
         <li>
          <Link className='navigation-link white custom-bg-secondary'
            to="/profile"
            onMouseEnter={() => {setOnHover(true); setHoveredContent('ABOUT')}}
            onMouseLeave={() => setOnHover(false)}
          >
            ABOUT THIS APP
          </Link>
        </li>
      </ul>
    </header>
    <div style={ onHover ? AppStyle.navbarHoverOpen : AppStyle.navbarHoverClosed}>
     {onHover && <NavbarPopup content={hoveredContent} />}   
    </div>
   <div>
     <Routes>
      <Route path="/" element={<HomeNavigation onHover={onHover}/>} />
      <Route path="/pastProject" element={<PastWorks onHover={onHover}/>} />
      <Route path="/myWorks" element={<HomePage />} />
      <Route path="/profile" element={<p>profile</p>} />
    </Routes>
   </div>
  </div>)
};

// <Link className="navigation-link" to="/">HOME</Link>
export default App;
