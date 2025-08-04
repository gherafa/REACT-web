import ojt from '../Assets/ojt.jfif';

const ChipOjt = () => (
 <div className="section-bar-body">
    <div className="card-column-3-section">
      <header className="header-top custom-secondary">About OJT</header>
      <p className="adjust-center font-description-med">
        Second stage (9 months) : First hand learning and contributing as one of Jenius (Digital Banking Apps) developer to develop both frontend and backend side of the application.
      </p>
    </div>
    <div className="section-bar-body-content">
        <div>
        <header className="adjust-center font-title custom-secondary">Take aways</header>
        <p className='adjust-center font-description-med'>
           In this second stage, I was able to adapt and deliver in a fast-paced agile environment of Jenius Team and contribute to develop several new features in Wealth team and also Transaction Team in both front-end and back-end.
           And finally after a year long journey of MT program, I passed the OJT stage and able to contribute to the team and company as a full time employee.
        </p>
      </div>
      <img src={ojt} width="900" height="500" className='' />
    </div>
  </div>
);

export default ChipOjt;
