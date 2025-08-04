import React from "react";
import ReliefOpsContent from "../component/ReliefOpsContent";
import ChipContent from "../component/ChipContent";

import cropGui from '../Assets/cropGui.jpg';
import program from '../Assets/program.jpg';

const PastWorks = () => {
  const [ isPreview, setPreview ] = React.useState(false);
  const [ content, setContent ] = React.useState('');

  const onClickItem = (content) => () => {
    setPreview(!isPreview);
    setContent(content)
  };

  return (
    <div className="content-column">
      {!isPreview ?
        // <>
        //   <div className="card-column bg-transparent box-shadow">
        //     <div className="card-column-head bg-transparent box-shadow font-header" onClick={onClickItem('RELIEF_OPS')}>Relief-Ops Research Team</div>
        //     <div className="card-column-head bg-transparent box-shadow font-header" onClick={onClickItem('CHIP')}>CHIP MT Program</div>
        //     <div className="card-column-head bg-transparent box-shadow font-header">JENIUS FE</div>
        //     <div className="card-column-head bg-transparent box-shadow font-header">JENIUS BE</div>
        //   </div>
        //   <div className="card-column-body bg-transparent box-shadow" />
        // </> 
        <>
          <div className="card-column-2-section">
            <div 
              style={{backgroundImage: `url(${cropGui})`}}
              className="card-column-4-section box-shadow font-title white"
              onClick={onClickItem('RELIEF_OPS')}
            >
              Relief-Ops Research Team
            </div>
            <div
              style={{backgroundImage: `url(${program})`, backgroundPosition: 'center'}}
              className="card-column-4-section box-shadow font-title white"
              onClick={onClickItem('CHIP')}
            >
              CHIP MT Program
            </div>
          </div>
          <div className="card-column-2-section">
            <div className="card-column-4-section box-shadow font-title custom-secondary">JENIUS FE</div>
            <div className="card-column-4-section box-shadow font-title custom-secondary">JENIUS BE</div>
          </div>
        </>
        :
        <> 
          { content === 'RELIEF_OPS' && (<ReliefOpsContent setPreview={setPreview} /> )}
          { content === 'CHIP' && (<ChipContent setPreview={setPreview} /> )}
        </> 
      }
    </div>
  )
};


export default PastWorks;