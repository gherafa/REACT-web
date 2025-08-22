import loginQr from '../../Assets/loginQr.jfif';
import ccImage from '../../Assets/cc.jfif';
import forexImage from '../../Assets/forexTrf.jfif';
import qrPayment from '../../Assets/qrPayment.jfif';

const FeSnippets = () => (
  <div className='card-column-2-section-high'>
    <div className='card-column-2-section-high-container'>
      <img src={loginQr} className='card-column-2-section-high-item bg-dark' />
      <p className='font-header adjust-center'> Qr Payment Button Shortcut </p>
    </div>    
     <div className='card-column-2-section-high-container'>
      <img src={ccImage}  className='card-column-2-section-high-item bg-gold' />
      <p className='font-header adjust-center'> Credit Card Features </p>
    </div>
     <div className='card-column-2-section-high-container'>
      <img src={forexImage} className='card-column-2-section-high-item bg-dark' />
      <p className='font-header adjust-center'> Foreign Currency Transfer </p>
    </div>
     <div className='card-column-2-section-high-container'>
      <img src={qrPayment} className='card-column-2-section-high-item bg-gold' />
      <p className='font-header adjust-center'> Qr Payment Window </p>
    </div>
  </div>
);

export default FeSnippets;
