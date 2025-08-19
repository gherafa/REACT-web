import React from 'react';

import closeIcon from '../Assets/closeIcon.png';
import javaIcon from '../Assets/java.svg';
import reactIcon from '../Assets/react.svg';
import pythonIcon from '../Assets/python.svg';
import nodeIcon from '../Assets/node.svg';
import mongoDb from '../Assets/mongodb.svg';
import kubernetesIcon from '../Assets/kubernetes.svg';
import JsSkillsContent from './JsSkillsContent';
import JavaSkillsContent from './JavaSkillsContent.jsx';
import PythonSkillsContent from './PythonSkillsContent.jsx';
import DatabaseSkillsContent from './DatabaseSkillsContent.jsx';
import CicdSkillsContent from './CicdSkillsContent.jsx';

const SkillsContent = () => {
  const [ isModalShown, setModalShown ] = React.useState(false); 
  const [ context, setContext ] = React.useState(''); 

  const onClickItem = (context) => () => {
    setModalShown(!isModalShown);
    setContext(context);
  };

  const contentMatcher = (context) => {
    let content;

    switch (context){
      case 'react':
        content = <JsSkillsContent />;
        break;

      case 'java':
        content = <JavaSkillsContent />;
        break;
      
      case 'python':
        content = <PythonSkillsContent />;
        break;

      case 'nodejs':
        content = <></>;
        break;

      case 'database':
        content = <DatabaseSkillsContent />;
        break;

      case 'container':
        content = <CicdSkillsContent />;
        break;

      default:
        break;
    }

    return <div>{content}</div>
  };


  return (
     <div className="single-card-content box-shadow">
      {isModalShown ?
        <div className='modal-content bg-transparent'>
          <img src={closeIcon} width="40" height="40" className='top-right-element' onClick={onClickItem('')}/>
          {contentMatcher(context)}
        </div> :
        <>
          <header className="header-top custom-secondary"> Technical Skills </header>
          <p style={{textAlign: 'justify'}}>Click on each icon for technical skill description</p>
          <div className='divided-content'>
            <div className='small-card'>
              <div className='small-box'>
                <img src={nodeIcon} className='image-clickable' onClick={onClickItem('react')}/>
                <p style={{textAlign: 'center'}}>JAVASCRIPT</p> 
              </div>
              <div className='small-box'>
                <img src={javaIcon} className='image-clickable' onClick={onClickItem('java')}/>
                <p style={{textAlign: 'center'}}>JAVA</p>
              </div>
              <div className='small-box'>
                <img src={pythonIcon} className='image-clickable' onClick={onClickItem('python')}/>
                <p style={{textAlign: 'center'}}>PYTHON</p>
              </div>
            </div>
            <div  className='small-card'>
              <div className='small-box'>
                <img src={mongoDb} className='image-clickable' onClick={onClickItem('database')}/>
                <p style={{textAlign: 'center'}}>DATABASE MANAGEMENT</p>
              </div>
              <div className='small-box'>
                <img src={kubernetesIcon} className='image-clickable' onClick={onClickItem('container')}/>
                <p style={{textAlign: 'center'}}>CONTAINER AND PIPELINE</p>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
};

export default SkillsContent;