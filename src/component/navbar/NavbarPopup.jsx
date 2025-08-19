const NavbarPopup = ({content}) => (
  <div>
    {content === 'HOME' && (
      <p className="font-header">A Curriculumvitae of Gheo Rahmat Fauzi's backgrounds and experiences.</p>
      )
    }
    {content === 'PAST_PROJECTS' && (
      <p className="font-header">More detailed description of past works and projects.</p>
    )}
    {content === 'MY_WORKS' && (
      <p className="font-header">A simulation of integration with API simple money transfer system built using Java (SpringBoot)</p>
    )}
    {content === 'ABOUT' && (
      <p className="font-header">About this App and the tech used.</p>
    )}
  </div>
);

export default NavbarPopup;
