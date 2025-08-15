import React from 'react';
import closeIcon from '../Assets/closeIcon.png';
import BeSummary from './JeniusBackEnd/BeSummary';

const BackendContent = ({setPreview}) => {
  const [ context, setContext ] = React.useState('');

  return (
     <>
      <div className="card-column bg-transparent">
        <div 
          style={context === '' ? {borderRadius: '50%', background: 'goldenrod', transition: 'all 0.3s ease 0s'} : {}}
          className="card-column-head box-shadow font-header" 
          onClick={() => {setContext('')}}
        >
          Summary & Tech Stack
        </div>
        <img src={closeIcon} width="40" height="40" className='top-right-relative' onClick={() => setPreview(false)}/>
      </div>
      <div className="card-column-body bg-transparent box-shadow">
        <BeSummary />
      </div>
    </>
  );
};

export default BackendContent;
