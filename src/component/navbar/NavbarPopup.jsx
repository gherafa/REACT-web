const NavbarPopup = ({content}) => (
  <div>
    {content === 'HOME' && (
      <p>A Curriculumvitae of Gheo Rahmat Fauzi's backgrounds and experiences.</p>
      )
    }
    {content === 'PAST_PROJECTS' && (
      <p>More detailed description of past works and projects.</p>
    )}
    {content === 'MY_WORKS' && (
      <p>A simulation of integration with API simple money transfer system built using Java (SpringBoot)</p>
    )}
    {content === 'ABOUT' && (
      <p>About this App and the tech used.</p>
    )}
  </div>
);

export default NavbarPopup;
