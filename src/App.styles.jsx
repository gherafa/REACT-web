const getNavbarStyle = (isHover) => {
  const isSmall = window.innerWidth <= 600;

  if (isHover) {
    return {
      transition: 'all 0.3s ease',
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      height: isSmall ? '5%' : '10%',
      zIndex: 1,
      backgroundColor: 'hsla(0, 0%, 83%, 0.5)',
      flexDirection: isSmall ? 'row' : 'column',
      boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, 0.5)',
      fontSize: isSmall ? '10px' : '20px',
      paddingTop: '10px'
    };
  }

  return {
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '0%'
  };
};


export default getNavbarStyle;