import React from "react";

import peta from '../Assets/peta.jfif';
import gui from '../Assets/gui.jfif';
import procWidget from '../Assets/procWidget.png';

const ReliefOpResult = () => {
  const [ isFirstItem, setFirstItem ] = React.useState(false);
  const [ isSecondItem, setSecondItem ] = React.useState(false);
  const [ isThirdItem, setThirdItem ] = React.useState(false);

  const isNonActive = isFirstItem || isSecondItem || isThirdItem;

  return (
    <>
      <div className="section-bar">
        <div 
          className="section-bar-card custom-secondary font-header bg-gold-t"
          onClick={() => { setFirstItem(!isFirstItem); setSecondItem(false); setThirdItem(false)}}
          style={ isFirstItem ? {height: '140%', background: 'rgba(0, 174, 255, 0.5)', color: 'black'} : {}}
        >
          <a>DESKTOP GUI</a>
        </div>
        <div
          className="section-bar-card custom-secondary font-header bg-gold-t"
          onClick={() => { setFirstItem(false); setSecondItem(!isSecondItem); setThirdItem(false)}}
          style={ isSecondItem ? {height: '140%', background: 'rgba(0, 174, 255, 0.5)', color: 'black'} : {}}
        >
          <a>PROCUREMENT AND SIMULATION RESULT</a>
        </div>
        <div
          className="section-bar-card custom-secondary font-header bg-gold-t"
          onClick={() => { setFirstItem(false); setSecondItem(false); setThirdItem(!isThirdItem)}}
          style={ isThirdItem ? {height: '140%', background: 'rgba(0, 174, 255, 0.5)', color: 'black'} : {}}
        >
          <a>DISASTER RISK MAP</a>
        </div>
      </div>
      {!isNonActive ? 
         <div className="section-bar-body">
            <div className="section-bar-body-content">
              <div>
                <header className="adjust-center font-title custom-secondary">Decision Support Tools Desktop GUI</header>
                <p className='adjust-center'>
                  A desktop GUI (Graphical User Interface) built using Python (Tkinter and PyQt Library). This tools has several functions
                  to help the government make a decision when disater occurs. By using
                  West Java Province information data, the tools able to provide the demand estimation and the most effective routes to deliver.
                </p>
              </div>
              <img src={gui} className='' />
            </div>
          </div>:
        <>
          { isFirstItem && 
            <div className="section-bar-body">
              <div className="section-bar-body-content">
                 <div>
                  <header className="adjust-center font-title custom-secondary">Decision Support Tools Desktop GUI</header>
                  <p className='adjust-center'>
                    A desktop GUI (Graphical User Interface) built using Python (Tkinter and PyQt Library). This tools has several functions
                    to help the government make a decision when disater occurs. By using
                    West Java Province information data, the tools able to provide the demand estimation and the most effective routes to deliver.
                  </p>
                </div>
                <img src={gui} className='' />
              </div>
            </div>
          }
          { isSecondItem && 
            <div className="section-bar-body">
              <div className="section-bar-body-content">
                 <div>
                  <header className="adjust-center custom-secondary">Widget to generate simulation based on several variables</header>
                  <p className='adjust-center'>
                    The input tab from the decision support tools that able to help the calculation of the simulation to be more effecttive
                    with several supporting data regarding to the disaster event or the area on impact.
                  </p>
                </div>
                <img src={procWidget} className='' />
              </div>
              <div className="section-bar-body-content">
                 <div>
                  <header className="adjust-center font-header custom-secondary">Effective Post-disaster Demand Routing Decision</header>
                  <p className='adjust-center '>
                    Routing decision as a guide for the government to distribute the estimated demand for post disaster event.
                    Calculated with the most effective route from the nearest supply warehouse, also including the number of vehicle and estimated
                    days needed for those vehicles to be able to complete the delivery with assumed speed.
                  </p>
                </div>
                <img src={peta} className='' />
              </div>
            </div>
          }
          { isThirdItem && <div className="iframe-img">
              <iframe
                src="/semua.html"
                title="External HTML"
                width="100%"
                height="98%"
                style={{ border: 'none', marginTop: '1%' }}
              />
            </div>
          }
        </>
      }
    </>
  );
};

export default ReliefOpResult;
