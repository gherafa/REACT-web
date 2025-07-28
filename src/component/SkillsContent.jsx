import gIcon from '../Assets/gIcon.png';
import javaIcon from '../Assets/java.svg';
import reactIcon from '../Assets/react.svg';
import pythonIcon from '../Assets/python.svg';
import nodeIcon from '../Assets/node.svg';
import mongoDb from '../Assets/mongodb.svg';
import kubernetesIcon from '../Assets/kubernetes.svg';


const EducationsContent = () => {
  return (
     <div className="single-card-content bg-transparent box-shadow">
      <header className="header-top custom-secondary"> Technical Skills </header>
      <div className='divided-content'>
        <div className='small-card bg-transparent'>
            <img src={reactIcon} width="150" height="150" className='image-clickable' />
            <img src={javaIcon} width="150" height="150" className='image-clickable' />
            <img src={pythonIcon} width="150" height="150" className='image-clickable' />
        </div>
        <div  className='small-card bg-transparent'>
            <img src={nodeIcon} width="150" height="150" className='image-clickable' />
            <img src={mongoDb} width="200" height="150" className='image-clickable' />
            <img src={kubernetesIcon} width="200" height="150" className='image-clickable' />
        </div>
      </div>
    </div>
  )
};

export default EducationsContent;