import React from 'react';


class HomeNavigation extends React.PureComponent {
  constructor() {
    super();
    this.state = { content: 'FIRST CONTENT' }
  }

  setContent(textContent) {
    this.setState({ content: textContent});
  }

  componentDidUpdate() {

  }

  render() {
    const lorepIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const { content } = this.state;

    return (
      <div className='content bg-dark'>
       <div className='section-1'>
        <div className='content-navigation'>
            <a href='#' onClick={() => this.setContent(lorepIpsum)} className='content-navigation-item white bg-gold'>SUMMARY</a>
            <a href='#' onClick={() => this.setContent('')} className='content-navigation-item white custom-bg-primary'>EXPERIENCES</a>
            <a href='#' className='content-navigation-item white bg-gold'>EDUCATIONS</a>
            <a href='#' className='content-navigation-item white custom-bg-primary'>STRENGTHS</a>
            <a href='#' className='content-navigation-item white bg-gold'>SKILLS</a>
        </div>
       </div>
       <div className='section-2 bg-light'>
          <p>{content}</p>
       </div>
      </div>
    )
  };
};

export default HomeNavigation;