import React from "react";
import ReliefOpsContent from "../component/ReliefOpsContent";
import ChipContent from "../component/ChipContent";

import cropGui from '../Assets/cropGui.jpg';
import program from '../Assets/program.jpg';
import frontend from '../Assets/frontend.jpg';
import logoJenius from '../Assets/backend.webp';
import FrontendContent from "../component/FrontendContent";
import BackendContent from "../component/BackendContent";

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
              <p className="bg-gold-t wrapped-radius">Relief-Ops Research Team</p>
            </div>
            <div
              style={{backgroundImage: `url(${program})`, backgroundPosition: 'center'}}
              className="card-column-4-section box-shadow font-title white"
              onClick={onClickItem('CHIP')}
            >
              <p className="bg-gold-t wrapped-radius">CHIP MT Program</p>
            </div>
          </div>
          <div className="card-column-2-section">
            <div
              style={{backgroundImage: `url(${frontend})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
              className="card-column-4-section box-shadow font-title"
              onClick={onClickItem('FRONT_END')}
            >
              <p className="bg-gold-t wrapped-radius">SMBC BANK (Front End)</p>
            </div>
             <div
              style={{backgroundImage: `url(${logoJenius})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
              className="card-column-4-section box-shadow font-title black"
              onClick={onClickItem('BACK_END')}
            >
              <p className="bg-gold-t wrapped-radius">SMBC BANK (Back End)</p>
            </div>
          </div>
        </>
        :
        <> 
          { content === 'RELIEF_OPS' && (<ReliefOpsContent setPreview={setPreview} /> )}
          { content === 'CHIP' && (<ChipContent setPreview={setPreview} /> )}
          { content === 'FRONT_END' && (<FrontendContent setPreview={setPreview} /> )}
          { content === 'BACK_END' && (<BackendContent setPreview={setPreview} /> )}
        </> 
      }
    </div>
  )
};


export default PastWorks;