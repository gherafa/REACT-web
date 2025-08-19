import React from 'react';
import closeIcon from '../Assets/closeIcon.png';
import FeSummary from './JeniusFrontEnd/FeSummary';
import FeSnippets from './JeniusFrontEnd/FeSnippets';

const FrontendContent = ({setPreview}) => {
  const [ context, setContext ] = React.useState('');

  const contentMatcher = (context) => {
    let content;

    switch (context){
      case 'SNIPPETS':
        content = <FeSnippets />
        break;

      default :
        content = <FeSummary />
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
          Summary & Tech Stack
        </div>
         <div 
          style={context === 'SNIPPETS' ? {borderRadius: '50%', background: 'goldenrod', transition: 'all 0.3s ease 0s'} : {}}
          className="card-column-head box-shadow font-header" 
          onClick={() => {setContext('SNIPPETS')}}
        >
          Snippets
        </div>
        <img src={closeIcon} width="40" height="40" className='top-right-relative' onClick={() => setPreview(false)}/>
      </div>
      <div className="card-column-body bg-transparent box-shadow">
        {contentMatcher(context)}
      </div>
    </>
  );
};

export default FrontendContent;
