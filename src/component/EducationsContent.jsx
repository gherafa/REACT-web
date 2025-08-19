const EducationsContent = () => {
  const summaryContent = 'I am a passionate software engineer dedicated to developing advanced yet'
    + 'maintainable system. I am a responsible person that able to work effectively'
    + 'under pressure. I excel both as a collaborative team player and as an'
    + 'independent contributor. Eager to explore and engage with the global tech'
    + 'ecosystem, I am driven to tackle world-class technology challenges that push'
    + 'the boundaries of innovation. I aim to grow continuously while creating a'
    + 'meaningful and lasting impact for both the company and society.';

  return (
     <div className="single-card-content bg-transparent box-shadow">
      <header className="header-top custom-secondary"> Educations Background </header>
        <br />
        <div style={{textAlign: "center"}}>
          <p style={{fontSize: '18px'}}><strong>University of Padjadjaran</strong></p>
          <p style={{fontSize: '18px'}}>Faculty of Science</p>
          <p style={{fontSize: '18px'}}>GPA 3.4 / 4.0</p>
        </div>
      <br /><br /><br />
      <header className="header-top custom-secondary"> Languages Proficiency </header>
        <br />
        <div style={{textAlign: 'center'}}>
          <p><strong>English</strong>: Intermediate Level</p>
          <p><strong>Japanese</strong>: Conversational Level</p>
        </div>
    </div>
  )
};

export default EducationsContent;