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

  componentDidMount() {
    this.setState({ ...this.initialState, isSummarySection: true})
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
    const { onHover } = this.props;

    return (
      <div className={`content ${onHover ? 'blur' : ''}`}>
        <div className="section-1">
          <div className="content-navigation">
            <div
              onClick={() => this.setState({ ...this.initialState, isSummarySection: !isSummarySection })}
              className="home-navigation-item-short box-shadow"
              style={ isSummarySection ? {backgroundColor: 'goldenrod', width: '98%'} : {}}
            >
              <a>SUMMARY</a>
            </div>
            <div
              onClick={() => this.setState({ ...this.initialState, isExperienceSection: !isExperienceSection })}
              className="home-navigation-item-short box-shadow"
              style={ isExperienceSection ? {backgroundColor: 'goldenrod', width: '98%'} : {}}
            >
              <a>EXPERIENCES</a>
            </div>
            <div
              onClick={() => this.setState({ ...this.initialState, isEducationContent: !isEducationContent })}
              className="home-navigation-item-short box-shadow"
              style={ isEducationContent ? {backgroundColor: 'goldenrod', width: '98%'} : {}}
            >
              <a>EDUCATIONS</a>
            </div>
            <div
              onClick={() => this.setState({ ...this.initialState, isStrengthsContent: !isStrengthsContent })}
              className="home-navigation-item-short box-shadow"
              style={ isStrengthsContent ? {backgroundColor: 'goldenrod', width: '98%'} : {}}
            >
              <a>STRENGTHS</a>
            </div>
            <div
              onClick={() => this.setState({ ...this.initialState, isSkillsContent: !isSkillsContent })}
              className="home-navigation-item-short box-shadow"
              style={ isSkillsContent ? {backgroundColor: 'goldenrod', width: '98%'} : {}}
            >
              <a>SKILLS</a>
            </div>
            <div
              onClick={() => this.setState({ ...this.initialState, isContributionsContent: !isContributionsContent })}
              className="home-navigation-item-short box-shadow"
              style={ isContributionsContent ? {backgroundColor: 'goldenrod', width: '98%'} : {}}
            >
              <a>CONTRIBUTIONS</a>
            </div>
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