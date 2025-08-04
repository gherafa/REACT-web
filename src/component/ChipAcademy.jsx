import chipApps from '../Assets/chipApps.png';

const ChipAcademy = () => (
 <div className="section-bar-body">
    <div className="card-column-3-section">
      <header className="header-top custom-secondary">Academy and Class Training</header>
      <p className="adjust-center font-description-med">
        First stage (3 months): 1 month of general banking knowledge training and 2 months of IT (fullstack 
        developer) training and technical test.
      </p>
    </div>
    <div className="section-bar-body-content">
        <div>
        <header className="adjust-center font-title custom-secondary">Web and Mobile Applications</header>
        <p className='adjust-center font-description-med'>
          At the end of the first stage, we are required to form a team and 
          build a simple digital banking application from scratch. Handling both the backend using Java spring boot and the frontend using React (web-application), and React-Native (mobile-application). In a a span of 1 week we are able to deliver the requirement of the task and pass the first stage as a team.
        </p>
      </div>
      <img src={chipApps} width="900" height="500" className='' />
    </div>
  </div>
);

export default ChipAcademy;
