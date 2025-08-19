import React from "react";

import closeIcon from '../Assets/closeIcon.png';
import ReliefOpsSummary from "./ReliefOpsSummary";
import ReliefOpsActivity from "./ReliefOpsActivity";
import ReliefOpResult from "./ReliefOpsResult";

const ReliefOpsContent = ({setPreview}) => {
  const [ isProject, setIsProject ] = React.useState(false);
  const [ isResult, setIsResult ] = React.useState(false);
  const [ context, setContext ] = React.useState('');

  const contentMatcher = (context) => {
    let content;

    switch (context){
      case 'RESULT':
        content = <ReliefOpResult />
        break;

      case 'ACTIVITY':
        content = <ReliefOpsActivity />;
        break;

      default :
      content = <ReliefOpsSummary />
        break;
    }

    return <>{content}</>
  };
  
  return (
    <>
      <div className="card-column bg-transparent">
        <div 
          style={context === '' ? {borderRadius: '50%', background: 'goldenrod', transition: 'all 0.3s ease 0s'} : {}}
          className="card-column-head box-shadow font-header"
          onClick={() => {setIsProject(false); setIsResult(false); setContext('')}}
        >
          Relief-Ops Research Team
        </div>
        <div 
          style={isProject ? {borderRadius: '50%', background: 'goldenrod', transition: 'all 0.3s ease 0s'} : {}}
          className="card-column-head box-shadow font-header" 
          onClick={() => {setIsProject(true);  setIsResult(false); setContext('ACTIVITY')}}
        >
          ACTIVITY
        </div>
        <div 
          style={isResult ? {borderRadius: '50%', background: 'goldenrod', transition: 'all 0.3s ease 0s'} : {}}
          className="card-column-head box-shadow font-header" 
          onClick={() => {setIsProject(false); setIsResult(true); setContext('RESULT')}}
        >
          PROJECTS RESULT
        </div>
        <img src={closeIcon} width="40" height="40" className='top-right-relative' onClick={() => setPreview(false)}/>
      </div>
      <div className="card-column-body bg-transparent box-shadow">
        {contentMatcher(context)}
      </div>
    </>
  )
};


export default ReliefOpsContent;