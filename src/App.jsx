import './App.css';
import HomePage from './page/HomePage';
import HomeNavigation from './page/HomeNavigation';
import PastWorks from './page/PastWorks';
import { Link, Routes, Route } from 'react-router-dom';
import gIcon from './Assets/gIcon.png';
import React from 'react';
import AppStyle from './App.styles';
import NavbarPopup from './component/navbar/NavbarPopup';
import Transfer from './page/Transfer';
import AboutPage from './page/About';
import getNavbarStyle from './App.styles';

const App = () => {
  const [onHover, setOnHover] = React.useState(false);
  const [hoveredContent, setHoveredContent] = React.useState('');

  return ( <div className="App">
    <header className="custom-navbar sticky-top bg-navbar">
      <ul className="navigation-bar">
        <img src={gIcon} className='image'/>
        <li>
          <Link className='navigation-link'
            to="/"
            onMouseEnter={() => {setOnHover(true); setHoveredContent('HOME')}}
            onMouseLeave={() => setOnHover(false)}
          >
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link className='navigation-link'
            to="/pastProject"
            onMouseEnter={() => {setOnHover(true); setHoveredContent('PAST_PROJECTS')}}
            onMouseLeave={() => setOnHover(false)}
          >
            <a>PAST PROJECTS</a>
          </Link>
        </li>
         <li>
          <Link className='navigation-link'
            to="/myWorks"
            onMouseEnter={() => {setOnHover(true); setHoveredContent('MY_WORKS')}}
            onMouseLeave={() => setOnHover(false)}
          >
            <a>SIMULATION</a>
          </Link>
        </li>
         <li>
          <Link className='navigation-link'
            to="/about"
            onMouseEnter={() => {setOnHover(true); setHoveredContent('ABOUT')}}
            onMouseLeave={() => setOnHover(false)}
          >
            <a>ABOUT</a>
          </Link>
        </li>
      </ul>
    </header>
    <div style={ getNavbarStyle(onHover)} >
     {onHover && <NavbarPopup content={hoveredContent} />}   
    </div>
   <div>
     <Routes>
      <Route path="/" element={<HomeNavigation onHover={onHover}/>} />
      <Route path="/pastProject" element={<PastWorks onHover={onHover}/>} />
      <Route path="/myWorks" element={<Transfer onHover={onHover}/>} />
      <Route path="/about" element={<AboutPage onHover={onHover}/>} />
    </Routes>
   </div>
  </div>)
};

// <Link className="navigation-link" to="/">HOME</Link>
export default App;
