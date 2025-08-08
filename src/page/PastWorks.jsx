import React from "react";
import ReliefOpsContent from "../component/ReliefOpsContent";
import ChipContent from "../component/ChipContent";

import cropGui from '../Assets/cropGui.jpg';
import program from '../Assets/program.jpg';
import FrontendContent from "../component/FrontendContent";

const PastWorks = ({onHover}) => {
  const [ isPreview, setPreview ] = React.useState(false);
  const [ content, setContent ] = React.useState('');

  const onClickItem = (content) => () => {
    setPreview(!isPreview);
    setContent(content)
  };

  return (
    <div className={`content-column ${onHover ? 'blur' : ''}`}>
      {!isPreview ?
        <>
          <div className="card-column-2-section">
            <div 
              style={{backgroundImage: `url(${cropGui})`}}
              className="card-column-4-section box-shadow font-title white"
              onClick={onClickItem('RELIEF_OPS')}
            >
              <p>Relief-Ops Research Team</p>
            </div>
            <div
              style={{backgroundImage: `url(${program})`, backgroundPosition: 'center'}}
              className="card-column-4-section box-shadow font-title white"
              onClick={onClickItem('CHIP')}
            >
              <p>CHIP MT Program</p>
            </div>
          </div>
          <div className="card-column-2-section">
            <div
              className="card-column-4-section box-shadow font-title custom-secondary"
              onClick={onClickItem('FRONT_END')}
            >
              SMBC BANK (Front End)
            </div>
            <div className="card-column-4-section box-shadow font-title custom-secondary">SMBC BANK (Back End)</div>
          </div>
        </>
        :
        <> 
          { content === 'RELIEF_OPS' && (<ReliefOpsContent setPreview={setPreview} /> )}
          { content === 'CHIP' && (<ChipContent setPreview={setPreview} /> )}
          { content === 'FRONT_END' && (<FrontendContent setPreview={setPreview} /> )}
        </> 
      }
    </div>
  )
};


export default PastWorks;