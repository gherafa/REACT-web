/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import ExperiencesContent from '../component/ExperiencesContent';
import StrengthsContent from '../component/StrengthsContent';
import ContributionsContent from '../component/ContributionsContent';

class HomeNavigation extends React.PureComponent {
  initialState = {
    isSummarySection: false,
    isExperienceSection: false,
    isStrengthsContent: false,
    isContributionsContent: false
  };

  constructor() {
    super();
    this.state = this.initialState;
  }

  render() {
    const summaryContent = 'I am a passionate software engineer dedicated to developing advanced yet'
    + 'maintainable system. I am a responsible person that able to work effectively'
    + 'under pressure. I excel both as a collaborative team player and as an'
    + 'independent contributor. Eager to explore and engage with the global tech'
    + 'ecosystem, I am driven to tackle world-class technology challenges that push'
    + 'the boundaries of innovation. I aim to grow continuously while creating a'
    + 'meaningful and lasting impact for both the company and society.';
    const {
      isSummarySection,
      isExperienceSection,
      isStrengthsContent,
      isContributionsContent
    } = this.state;

    return (
      <div className="content bg-dark">
        <div className="section-1">
          <div className="content-navigation">
            <a href="#" onClick={() => this.setState({ ...this.initialState, isSummarySection: true })} className="content-navigation-item white bg-gold">SUMMARY</a>
            <a href="#" onClick={() => this.setState({ ...this.initialState, isExperienceSection: true })} className="content-navigation-item white custom-bg-primary">EXPERIENCES</a>
            <a href="#" className="content-navigation-item white bg-gold">EDUCATIONS</a>
            <a href="#" onClick={() => this.setState({ ...this.initialState, isStrengthsContent: true })} className="content-navigation-item white custom-bg-primary">STRENGTHS</a>
            <a href="#" className="content-navigation-item white bg-gold">SKILLS</a>
            <a href="#" onClick={() => this.setState({ ...this.initialState, isContributionsContent: true })} className="content-navigation-item white custom-bg-primary">CONTRIBUTIONS & PUBLICATIONS</a>
          </div>
        </div>
        <div className="section-2 bg-light">
          {isSummarySection && <p>{summaryContent}</p>}
          {isExperienceSection && <ExperiencesContent />}
          {isStrengthsContent && <StrengthsContent />}
          {isContributionsContent && <ContributionsContent />}
        </div>
      </div>
    );
  }
}

export default HomeNavigation;