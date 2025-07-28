/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import ExperiencesContent from '../component/ExperiencesContent';
import StrengthsContent from '../component/StrengthsContent';
import ContributionsContent from '../component/ContributionsContent';
import SummaryContent from '../component/SummaryContent';
import EducationsContent from '../component/EducationsContent';
import SkillsContent from '../component/SkillsContent';

class HomeNavigation extends React.PureComponent {
  initialState = {
    isSummarySection: false,
    isExperienceSection: false,
    isStrengthsContent: false,
    isContributionsContent: false,
    isEducationContent: false,
    isSkillsContent: false
  };

  constructor() {
    super();
    this.state = this.initialState;
  }

  render() {
    const {
      isSummarySection,
      isExperienceSection,
      isStrengthsContent,
      isContributionsContent,
      isEducationContent,
      isSkillsContent
    } = this.state;

    return (
      <div className="content bg-dark">
        <div className="section-1">
          <div className="content-navigation">
            <a href="#" onClick={() => this.setState({ ...this.initialState, isSummarySection: true })} className="content-navigation-item white" style={ isSummarySection ? {backgroundColor: 'goldenrod'}: 
              { backgroundColor: '#304D63'}}>SUMMARY</a>
            <a href="#" onClick={() => this.setState({ ...this.initialState, isExperienceSection: true })} className="content-navigation-item white" style={ isExperienceSection ? {backgroundColor: 'goldenrod'}: 
              { backgroundColor: '#304D63'}}>EXPERIENCES</a>
            <a href="#" onClick={() => this.setState({ ...this.initialState, isEducationContent: true })} className="content-navigation-item white" style={ isEducationContent ? {backgroundColor: 'goldenrod'}: 
              { backgroundColor: '#304D63'}}>EDUCATIONS</a>
            <a href="#" onClick={() => this.setState({ ...this.initialState, isStrengthsContent: true })} className="content-navigation-item white" style={ isStrengthsContent ? {backgroundColor: 'goldenrod'}: 
              { backgroundColor: '#304D63'}}>STRENGTHS</a>
            <a href="#" onClick={() => this.setState({ ...this.initialState, isSkillsContent: true })}className="content-navigation-item white" style={ isSkillsContent ? {backgroundColor: 'goldenrod'}: 
              { backgroundColor: '#304D63'}}>SKILLS</a>
            <a href="#" onClick={() => this.setState({ ...this.initialState, isContributionsContent: true })} className="content-navigation-item white" style={ isContributionsContent ? {backgroundColor: 'goldenrod'}: 
              { backgroundColor: '#304D63'}}>CONTRIBUTIONS & PUBLICATIONS</a>
          </div>
        </div>
        <div className="section-2">
          {isSummarySection && <SummaryContent />}
          {isExperienceSection && <ExperiencesContent />}
          {isEducationContent && <EducationsContent />}
          {isStrengthsContent && <StrengthsContent />}
          {isSkillsContent && <SkillsContent />}
          {isContributionsContent && <ContributionsContent />}
        </div>
      </div>
    );
  }
}

export default HomeNavigation;