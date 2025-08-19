import workshop from '../Assets/workshop.jpg';
import meetingBpbd from '../Assets/meetingBpbd.jpg';
import profMeeting from '../Assets/profmeeting.jpg';
import bulogMeeting from '../Assets/bulogMeeting.jpg';
import bnpbMeeting from '../Assets/bnpbMeeting.jpg';
import stakeMeeting from '../Assets/stakeMeeting.jpg';

const ReliefOpsActivity = () => (
 <>
    <div className="card-column-6-section-base">
      <div className="card-column-6-section-item box-shadow">
        <div>
          <header className="adjust-center font-header custom-secondary">Capacity Building Workshop in Disaster Management</header>
          <p className='adjust-center'>We are running a capacity building workshop on Optimisation and Simulation for Relief Food Supply Chain in Disaster Management as part of Relief-OpS project which include Agent-Based Simulation by Professor Stephan Onggo, Simulation Optimization by Professor Christine Currie and Food Supply Chain in Disaster Events by Dr Tomy Perdana.</p>
        </div>
         <img src={workshop} width="300" height="200" className='' />
      </div>
      <div className="card-column-6-section-item box-shadow">
        <div>
          <header className="adjust-center font-header custom-secondary">Team meeting with West Java Regional Agency for Disaster Countermeasure</header>
          <p className='adjust-center'>The team met with our partner organisation, the West Java Regional Agency for Disaster Countermeasure (BPBD Jawa Barat). The meeting was attended by the Head of Operations, Dr Dani Ramdan and his team who explained about the standard operating procedures when providing relief items for disaster victims.</p>
        </div>
         <img src={meetingBpbd} width="300" height="200" className='' />
      </div>
    </div>
     <div className="card-column-6-section-base">
       <div className="card-column-6-section-item box-shadow">
        <div>
          <header className="adjust-center font-header custom-secondary">Relief-OpS team met with Bureau of Logistics West Java region (BULOG Kanwil Jabar)</header>
          <p className='adjust-center'> In this meeting, our partner organisation helped us understand about the decision making process with regard to the procurement, storage and distribution of rice for those who are affected by disasters. We also explained about our models and asked them to verify whether we had included key operational and policy constraints.</p>
        </div>
         <img src={profMeeting} width="300" height="200" className='' />
      </div>
      <div className="card-column-6-section-item box-shadow">
        <div>
          <header className="adjust-center font-header custom-secondary">Relief-OpS team met with Professor Anna Nagurney</header>
          <p className='adjust-center'>Relief-OpS team from the UK and Indonesia met with Professor Anna Nagurney. In this meeting, the team reported the progress of the project. The team presented the latest information about the food relief supply chain challenges in West Java and how our models could be used to help our partner organisations make better decisions.</p>
        </div>
        <img src={bulogMeeting} width="300" height="200" className='' />
      </div>
    </div>
     <div className="card-column-6-section-base">
      <div className="card-column-6-section-item box-shadow">
        <div>
          <header className="adjust-center font-header custom-secondary">Meeting with the Deputy System and Strategy of the National Agency for Disaster Countermeasure (BNPB)</header>
          <p className='adjust-center'>Stephan Onggo, Tomy Perdana and Cipta Endyana met with Mr Bernadus Wisnu Widjadja, the Deputy System and Strategy of the National Agency for Disaster Countermeasure (BNPB) to discuss about the plan to start the project.</p>
        </div>
        <img src={bnpbMeeting} width="300" height="200" className='' />
      </div>
      <div className="card-column-6-section-item box-shadow">
        <div>
          <header className="adjust-center font-header custom-secondary">Relief-OpS organised a pre-project meeting with several stakeholders</header>
          <p className='adjust-center'>Meeting to discuss about food relief supply chain challenges. Attended by the representatives from West Java Regional Disaster Management Agency (BPBD Jawa Barat), West Java Social Services (Dinas Sosial Pemda Jabar), West Java Food Security and Animal Husbandry Services (DKPP Jawa Barat), and Bureau of Logistics West Java region (BULOG Kanwil Jabar).</p>
        </div>
        <img src={stakeMeeting} width="300" height="200" className='' />
      </div>
    </div>
 </>
 
);

export default ReliefOpsActivity;