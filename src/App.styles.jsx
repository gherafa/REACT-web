const AppStyle = {
  navbarHoverClosed: {
    backgroundColor: 'white',
    transition: 'all 0.3s ease 0s',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '0%'
  },
   navbarHoverOpen: {
    transition: 'all 0.3s ease 0s',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '20%',
    zIndex: 1,
    backgroundColor: 'hsla(0, 0%, 83%, 0.5)',
    flexDirection: 'column',
    boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, 0.5)'
  }
};

export default AppStyle;