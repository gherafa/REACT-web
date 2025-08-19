import gheImage from '../Assets/gheoImage.jpeg';

const SummaryContent = () => {
  const summaryContent = 'I am a passionate software engineer dedicated to developing advanced yet '
    + 'maintainable system. I am a responsible person that able to work effectively '
    + 'under pressure. I excel both as a collaborative team player and as an '
    + 'independent contributor. Eager to explore and engage with the global tech '
    + 'ecosystem, I am driven to tackle world-class technology challenges that push '
    + 'the boundaries of innovation. I aim to grow continuously while creating a '
    + 'meaningful and lasting impact for both the company and society.';

  return (
     <div className="single-card-content-split bg-transparent box-shadow">
      <div className='split-card-left'>
        <img src={gheImage} className='image-border'/>  
      </div>
      <div className='split-card-right'>
        <header className="header-top custom-secondary"> About Me </header>
        <p style={{paddingTop: '3%'}}>
          {summaryContent}
        </p>
      </div>
    </div>
  )
};

export default SummaryContent;