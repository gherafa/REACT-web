import React from "react";

import closeIcon from '../Assets/closeIcon.png';
import ChipSummary from "./ChipSummary";
import ChipAcademy from "./ChipAcademy";
import ChipOjt from "./ChipOjt";

const ChipContent = ({setPreview}) => {
  const [ context, setContext ] = React.useState('');

  const contentMatcher = (context) => {
    let content;

    switch (context){
      case 'ACADEMY':
        content = <ChipAcademy />
        break;

      case 'OJT':
        content = <ChipOjt />
        break;

      default :
        content = <ChipSummary />
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
           onClick={() => {setContext('')}}
        >
          CHIP MT Program
        </div>
        <div 
          style={context === 'ACADEMY' ? {borderRadius: '50%', background: 'goldenrod', transition: 'all 0.3s ease 0s'} : {}}
          className="card-column-head box-shadow font-header" 
          onClick={() => {setContext('ACADEMY')}}
        >
          Academy and In-class Training
        </div>
        <div 
          style={context === 'OJT' ? {borderRadius: '50%', background: 'goldenrod', transition: 'all 0.3s ease 0s'} : {}}
          className="card-column-head box-shadow font-header" 
          onClick={() => {setContext('OJT')}}
        >
          On the Job Training (OJT)
        </div>
        <img src={closeIcon} width="40" height="40" className='top-right-relative' onClick={() => setPreview(false)}/>
      </div>
      <div className="card-column-body bg-transparent box-shadow">
        {contentMatcher(context)}
      </div>
    </>
  )
};


export default ChipContent;